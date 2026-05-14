from app.database.database import engine, Base

from app.models.user import User
from app.models.contract import Contract
Base.metadata.create_all(bind=engine)

print("Database tables created successfully!")