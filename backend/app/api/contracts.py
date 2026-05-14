import os
import shutil

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Depends
)

from sqlalchemy.orm import Session

from app.database.database import (
    SessionLocal
)

from app.models.contract import Contract

from app.services.pdf_service import (
    extract_text_from_pdf
)

router = APIRouter()

UPLOAD_DIR = "uploads"


def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/upload-contract")
async def upload_contract(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    extracted_text = extract_text_from_pdf(
        file_path
    )

    contract = Contract(
        filename=file.filename,
        file_path=file_path,
        uploaded_by="demo_user"
    )

    db.add(contract)

    db.commit()

    db.refresh(contract)

    return {
        "message": "Contract uploaded successfully",
        "filename": file.filename,
        "extracted_text": extracted_text[:1000]
    }


@router.get("/contracts")
def get_contracts(
    db: Session = Depends(get_db)
):
    contracts = db.query(
        Contract
    ).all()

    return contracts