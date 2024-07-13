from fastapi import Depends, HTTPException, Request, APIRouter, status
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2PasswordBearer
import hashlib
from datetime import timedelta, datetime
import jwt
from config.db import collection_name
from models.models import User, LoginRequest, TokenData

router = APIRouter()

# Tooken model, ensures that token is in the correct format
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# JWT Constants
SECRET_KEY = "Internia"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Has the password
def hash_password(password: str) -> str:
    sha256_hash = hashlib.sha256()
    sha256_hash.update(password.encode('utf-8'))
    return sha256_hash.hexdigest()

# Token creation
def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Authenticate the token when trying to access dashboard
def verify_token(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        
        if does_user_exist(email):
            token_data = TokenData(email=email)
            return token_data
        
    except TypeError:
        raise credentials_exception
    
    return False

def does_user_exist(email: str):
    user = collection_name.find_one({"email": email})
    if user:
        return True
    return False

def get_user_by_email(email):
    return collection_name.find_one({'email': email})

def create_user(user: User):
    user_dict = user.dict()
    result = collection_name.insert_one(user_dict)

def get_user_info(email):
    return collection_name.find_one({'email': email})

# Sign up
@router.post("/sign-up")
async def signup(user: User):
    db_user = get_user_by_email(user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user.password = hash_password(user.password)
    return create_user(user)

# Login and get access token
@router.post("/get-token")
async def login_for_access_token(form_data: LoginRequest):
    user = collection_name.find_one({"email": form_data.email})
    if not user or user["password"] != hash_password(form_data.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["email"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# Go through protected-route in order to get to dashboard
@router.get("/protected-route")
async def get_access(token_data: TokenData = Depends(verify_token)):
    info = get_user_info(token_data.email)
    return {"email": {info['email']}, "name": {info['name']}, "phoneNumber": {info['phoneNumber']}}


