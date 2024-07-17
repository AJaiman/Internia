from typing import Literal
from pydantic import BaseModel, EmailStr, constr

class LoginRequest(BaseModel):
    email: str
    password: str

class User(BaseModel):
    email: EmailStr
    password: constr(min_length=8)
    name: str
    phoneNumber: int

    # country: Literal['US', 'Other']
    # state: Literal['AL', 'AK', 'AZ', 'AR', 'CA',
    #                'CO', 'CT', 'DE', 'FL', 'GA',
    #                'HI', 'ID', 'IL', 'IN', 'IA',
    #                'KS', 'KY', 'LA', 'ME', 'MD',
    #                'MA', 'MI', 'MN', 'MS', 'MO',
    #                'MT', 'NE', 'NV', 'NH', 'NJ',
    #                'NM', 'NY', 'NC', 'ND', 'OH',
    #                'OK', 'OR', 'PA', 'RI', 'SC',
    #                'SD', 'TN', 'TX', 'UT', 'VT',
    #                'VA', 'WA', 'WV', 'WI', 'WY']
    # city: str
    # preferredLanguage: Literal['English', 'Spanish']

    highSchool: str
    graduationYear: int
    grade: Literal[9, 10, 11, 12]
    resume: str
    fieldOfInterest: str
    profilePhoto: str

class TokenData(BaseModel):
    email: str