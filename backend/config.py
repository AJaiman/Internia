from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

mongo_password = os.getenv('MONGO_PASSWORD')

uri = f"mongodb+srv://aravjaiman:{mongo_password}@internia.gqvo0.mongodb.net/?retryWrites=true&w=majority&appName=Internia"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.internia_db

users_collection = db["users"]
researchers_collection = db["researchers"]
research_papers_collection = db["research_papers"]
