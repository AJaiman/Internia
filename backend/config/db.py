from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:internia@internia.mtp0pfy.mongodb.net/?retryWrites=true&w=majority&appName=Internia")

db = client.users_db

collection_name = db["users"]