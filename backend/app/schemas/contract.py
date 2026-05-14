from pydantic import BaseModel


class ContractResponse(
    BaseModel
):
    id: int

    filename: str

    file_path: str

    uploaded_by: str

    class Config:
        from_attributes = True