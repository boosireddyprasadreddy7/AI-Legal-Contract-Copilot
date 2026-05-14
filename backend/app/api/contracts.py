import os
import shutil

from fastapi import (
    APIRouter,
    UploadFile,
    File
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

    return {
        "message": "Contract uploaded successfully",
        "filename": file.filename
    }