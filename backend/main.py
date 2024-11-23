from fastapi import FastAPI, APIRouter, HTTPException, status
from database.models import *
from config import users_collection, researchers_collection, research_papers_collection
from database.schemas import *

app = FastAPI()
router = APIRouter()

@router.post("/user")
async def create_user(
    first_name: str,
    last_name: str,
    email: str,
):
    # Check if user already exists
    existing_user = users_collection.find_one({"email": email})
    if existing_user:
        return {"message": "User already exists", "status_code": 400}
    
    # Create new user
    new_user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        tags=[],
        liked_papers=[],
        disliked_papers=[],
        saved_papers=[]
    )

    # Add to DB
    try:
        result = users_collection.insert_one(new_user.model_dump())
        return {"message": "User created successfully", "user_id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

@router.get("/user")
async def get_users():
    users = users_collection.find()
    return {"users": all_users(users)}

    

app.include_router(router)