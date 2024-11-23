from bson import ObjectId
from fastapi import FastAPI, APIRouter, HTTPException, status
from database.models import *
from config import users_collection, researchers_collection, research_papers_collection
from database.schemas import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

@router.post("/user")
async def create_user(new_user: NewUser):
    # Check if user already exists
    existing_user = users_collection.find_one({"email": new_user.email})
    if existing_user:
        return {"message": "User already exists", "status_code": 400}
    
    # Create new user
    new_user = User(
        first_name=new_user.first_name,
        last_name=new_user.last_name,
        email=new_user.email,
        tags=[],
        liked_papers=[],
        disliked_papers=[],
        saved_papers=[],
        saved_researchers=[]
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

@router.delete("/user")
async def delete_user(user_id: str):
    result = users_collection.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return {"message": "User deleted successfully"}

@router.patch("/user")
async def update_user(update_user: UpdateUser):
    user = users_collection.find_one({"email": update_user.email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    liked_papers = list(user["liked_papers"]) + update_user.positive_papers
    disliked_papers = list(user["disliked_papers"]) + update_user.negative_papers
    saved_papers = list(user["saved_papers"]) + update_user.saved_papers
    saved_researchers = list(user["saved_researchers"]) + update_user.saved_researchers

    users_collection.update_one({"email": update_user.email}, {"$set": {"liked_papers": liked_papers, "disliked_papers": disliked_papers, "saved_papers": saved_papers, "saved_researchers": saved_researchers}})
    return {"message": "User updated successfully"}



app.include_router(router)