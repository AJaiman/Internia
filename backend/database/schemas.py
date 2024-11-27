def single_user(user):
    return {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "email": user["email"],
        "tags": user["tags"],
        "liked_papers": user["liked_papers"],
        "disliked_papers": user["disliked_papers"],
        "saved_papers": user["saved_papers"],
        "saved_researchers": user["saved_researchers"],
        "recommended_papers": user["recommended_papers"],
        "paper_history": user["paper_history"]
    }

def all_users(users):
    return [single_user(user) for user in users]


interestPapers = {
    "biology": "ac5154c68f01e1618031b82ea5ef48f061d8e14b",
    "chemistry": "2e2699eb7aef99a1a80cd2fceec1c36a64bbe78d",
    "physics": "654daa3cea17b46629b818ae157314617ceb7d90",
    "earth_science": "d77cb33dc981626684bc1efc71e959e4524b770e",
    "astronomy": "ad342b248088268a31b542c4c3b21bd555882d1d",

    "computer_science": "9679554de5f828ea4506fedb5921d67a16a8e618",
    "quantum_computing": "f3d594544126e202dbd81c186ca3ce448af5255c",
    "ai": "204e3073870fae3d05bcbc2f6a8e263d9b72e776",
    "electrical_engineering": "fbbeee540d2332afb7ec7f1be011f58a9e929192",
    "mechanical_engineering": "d93b656b30c3b2ef0dd0a963173e34886555dfbe",
    "civil_engineering": "755ab9a3ce9c49033d338876f52c17585ad8775c",
    "chemical_engineering": "10a34bd387210c78e65372dd19419e174ff52da6",
    "biomedical_engineering": "fc4f431ea1491a35d45f9d079a3e3c70bb8fd7a7",
    "materials_science": "95792e2c19e5f79082ffa856048f730878c79a49",

    "mathematics": "92d5f6f2d13484c688ca4c08c1279229ba266089",
    "statistics": "91620155be40a417174a98c42ef6bdcc9b93db4a",
    "theoretical_computer_science": "b55fda1f58af7fd9ecde8f1dc193ddd6ab6e9d26",
    "data_science": "fa5853fdef7d2f6bb68203d187ddacbbddc63a8b",
    "systems_science": "3aefae7041e257eba616b91e41cbbe212a195c40",

    "medicine": "b069cbdf18833cc39368b198fb5c8a5ab61df41f",
    "public_health": "e0d38530014d03725d375ef298d48369cb1c69fe",
    "biochemistry": "03c1fc600c09ef60912bac6e8f6cb104e52fad81",
    "molecular_biology": "330a1c663766f5f7ede31c5bd369327c9122948e",
    "neuroscience": "8cc8f1de8bbc933b6118f976a0c3124bc2257b21",
    "pharmacology": "48cd2699127f7a8d11486c5a730d4fc8317ef24d",
}

def interestsList(interests):
    interestIds = []
    for interest in interests:
        if interest in interestPapers:
            interestIds.append(interestPapers[interest])
    return interestIds
