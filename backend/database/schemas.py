def single_user(user):
    return {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "email": user["email"],
        "tags": user["tags"],
        "liked_papers": user["liked_papers"],
        "disliked_papers": user["disliked_papers"],
        "saved_papers": user["saved_papers"]
    }

def all_users(users):
    return [single_user(user) for user in users]
