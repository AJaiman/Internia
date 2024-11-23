from fastapi import FastAPI, APIRouter, HTTPException

app = FastAPI()
router = APIRouter()


app.include_router(router)