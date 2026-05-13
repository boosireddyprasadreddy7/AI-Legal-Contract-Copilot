from fastapi import FastAPI

from app.api.auth import router as auth_router

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AI Legal Contract Copilot Backend Running"
    }


app.include_router(auth_router)