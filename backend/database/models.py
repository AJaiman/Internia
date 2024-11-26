from pydantic import BaseModel

# User Models
class User(BaseModel):
    first_name: str
    last_name: str
    email: str
    tags: list[str]
    liked_papers: list[str]
    disliked_papers: list[str]
    saved_papers: list[str]
    saved_researchers: list[str]
    recommended_papers: list[str]
    paper_history: list[str]

class NewUser(BaseModel):
    first_name: str
    last_name: str
    email: str

class UpdateUser(BaseModel):
    email: str
    positive_papers: list[str]
    negative_papers: list[str]
    saved_papers: list[str]
    saved_researchers: list[str]

# Research Paper Models
class ResearchPaper(BaseModel):
    title: str
    abstract: str
    tags: list[str]
    semantic_scholar_id: str

# Researcher Models
class Researcher(BaseModel):
    first_name: str
    last_name: str
    email: str
    affiliation: str
    profile_link: str
    tags: list[str]
