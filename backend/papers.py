import requests

paper_info_url = url = f"http://api.semanticscholar.org/graph/v1/paper/"
paper_recommendations_url = url = f"http://api.semanticscholar.org/recommendations/v1/papers/"

# api_key = "1234567890" TODO: get api key

def get_paper_info(paper_id: str):
    queryParams = {"fields": "title,abstract,authors,isOpenAccess,openAccessPdf"}
    response = requests.get(paper_info_url + paper_id, params=queryParams)
    if response.status_code != 200:
        print(f"Error getting paper info: {response.status_code}")
    else:
        return response.json()

print(get_paper_info("649def34f8be52c8b66281af98ae884c09aef38b"))

