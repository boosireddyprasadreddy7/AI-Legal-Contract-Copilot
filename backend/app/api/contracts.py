import os
import shutil

from fastapi import (
    APIRouter,
    UploadFile,
    File
)

from app.services.pdf_service import (
    extract_text_from_pdf
)

router = APIRouter()

UPLOAD_DIR = "uploads"


@router.post("/upload-contract")
async def upload_contract(
    file: UploadFile = File(...)
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

    return {
        "message": "Contract uploaded successfully",
        "filename": file.filename,
        "extracted_text": extracted_text[:3000]
    }