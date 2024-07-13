from pydantic import BaseModel, constr

class LoginRequest(BaseModel):
    email: str
    password: str

class User(BaseModel):
    email: str
    password: constr(min_length=8)
    name: str
    phoneNumber: int

class TokenData(BaseModel):
    email: str