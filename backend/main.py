from bson import ObjectId
from fastapi import FastAPI, APIRouter, HTTPException, status
from papers import *
from database.models import *
from config import users_collection, researchers_collection, research_papers_collection
from database.schemas import *
from fastapi.middleware.cors import CORSMiddleware

# Paper IDs to test with: "649def34f8be52c8b66281af98ae884c09aef38b", "23ffaa0fe06eae05817f527a47ac3291077f9e58"

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

#TODO Remove tags from user model

# User Routes
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
        saved_researchers=[],
        recommended_papers=[],
        paper_history=[],
        selectedInterests=False
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

@router.patch("/user") #TODO: Delete this route just for testing
async def update_user(update_user: UpdateUser):
    user = users_collection.find_one({"email": update_user.email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    users_collection.update_one({"email": str(update_user.email)}, {"$set": {"liked_papers": list(update_user.positive_papers) , "disliked_papers": list(update_user.negative_papers), "saved_papers": list(update_user.saved_papers), "saved_researchers": list(update_user.saved_researchers)}})
    return {"message": "User updated successfully"}

@router.get("/user/saved-papers/{email}")
async def get_saved_papers(email: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    saved_papers = list(user["saved_papers"])
    paper_details = get_paper_batch_info(saved_papers)
    
    return {"papers": paper_details}

@router.get("/user/recommended-papers/{email}")
async def get_recommended_papers(email: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    recommended_papers = list(user["recommended_papers"])
    paper_details = get_paper_batch_info(recommended_papers)
    
    return {"papers": paper_details}

@router.delete("/user/saved-papers/{email}/{paper_id}")
async def remove_saved_paper(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Remove paper from saved papers list
    saved_papers = list(user["saved_papers"])
    if paper_id not in saved_papers:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paper not found in saved papers")
        
    saved_papers.remove(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email}, 
        {"$set": {"saved_papers": saved_papers}}
    )
    
    return {"message": "Paper removed from saved papers successfully"}

@router.post("/user/saved-papers/{email}/{paper_id}") 
async def add_saved_paper(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Add paper to saved papers list if not already present
    saved_papers = list(user["saved_papers"])
    if paper_id in saved_papers:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Paper already saved")
        
    saved_papers.append(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email},
        {"$set": {"saved_papers": saved_papers}}
    )
    
    return {"message": "Paper added to saved papers successfully"}

@router.delete("/user/recommended-papers/{email}/{paper_id}")
async def remove_recommended_paper(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Remove paper from recommended papers list
    recommended_papers = list(user["recommended_papers"])
    if paper_id not in recommended_papers:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Paper not found in recommended papers")
        
    recommended_papers.remove(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email},
        {"$set": {"recommended_papers": recommended_papers}}
    )
    
    return {"message": "Paper removed from recommended papers successfully"}

@router.post("/user/liked-papers/{email}/{paper_id}")
async def add_liked_paper(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Add paper to liked papers list if not already present
    liked_papers = list(user["liked_papers"])
    if paper_id in liked_papers:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Paper already liked")
        
    liked_papers.append(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email},
        {"$set": {"liked_papers": liked_papers}}
    )
    
    return {"message": "Paper added to liked papers successfully"}

@router.post("/user/disliked-papers/{email}/{paper_id}")
async def add_disliked_paper(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Add paper to disliked papers list if not already present
    disliked_papers = list(user["disliked_papers"])
    if paper_id in disliked_papers:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Paper already disliked")
        
    disliked_papers.append(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email},
        {"$set": {"disliked_papers": disliked_papers}}
    )
    
    return {"message": "Paper added to disliked papers successfully"}

@router.get("/user/paper-history/{email}")
async def get_paper_history(email: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    paper_history = list(user["paper_history"])
    saved_papers = set(user["saved_papers"])
    
    paper_details = get_paper_batch_info(paper_history)
    
    # Add isSaved field to each paper
    for paper in paper_details:
        paper["isSaved"] = paper["paperId"] in saved_papers
    
    return {"papers": paper_details}

@router.post("/user/paper-history/{email}/{paper_id}")
async def add_paper_history(email: str, paper_id: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Add paper to paper history list if not already present
    paper_history = list(user["paper_history"])
    if paper_id in paper_history:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Paper already in history")
        
    paper_history.append(paper_id)
    
    # Update user document
    users_collection.update_one(
        {"email": email},
        {"$set": {"paper_history": paper_history}}
    )
    
    return {"message": "Paper added to history successfully"}

@router.post("/user/interests/{email}")
async def update_interests(email: str, interests: list[str]):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Convert interests to paper IDs using interestsList function
    paper_ids = interestsList(interests)
    
    # Update user's liked papers with the interest paper IDs
    users_collection.update_one(
        {"email": email},
        {"$set": {
            "liked_papers": paper_ids,
            "selectedInterests": True
        }}
    )
    
    return {"message": "User interests updated successfully"}

@router.get("/user/selected-interests/{email}")
async def get_selected_interests(email: str):
    user = users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    return {"selectedInterests": user["selectedInterests"]}

# Paper Routes (Semantic Scholar API)
@router.get("/paper/{paper_id}")
async def get_paper(paper_id: str):
    paper_details = get_paper_info(paper_id)
    return paper_details

@router.get("/paper/recommendations/{user_email}")
async def get_paper_recommendations(user_email: str):
    # Get user from database
    user = users_collection.find_one({"email": user_email})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    # Get user's liked and disliked papers
    positive_papers = list(user["liked_papers"])
    negative_papers = list(user["disliked_papers"])

    # Get recommendations using the papers API
    recommendations = get_paper_recs(positive_papers, negative_papers)


    # Update user's recommended papers list, avoiding duplicates
    recommended_papers = list(recommendations["recommendedPapers"])
    current_recommended = set(user["recommended_papers"])
    new_recommended = set(recommended_papers)
    updated_recommended = list(current_recommended.union(new_recommended))

    # Update user document with new recommendations
    users_collection.update_one(
        {"email": user_email},
        {"$set": {"recommended_papers": updated_recommended}}
    )
    if not recommendations:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error getting recommendations")

    return recommendations
app.include_router(router)

