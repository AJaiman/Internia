import requests

paper_info_url = "http://api.semanticscholar.org/graph/v1/paper/"
paper_batch_info_url = "https://api.semanticscholar.org/graph/v1/paper/batch"
paper_recommendations_url = "http://api.semanticscholar.org/recommendations/v1/papers/"

# api_key = "1234567890" TODO: get api key

def get_paper_info(paper_id: str):
    queryParams = {"fields": "title,abstract,authors,isOpenAccess,openAccessPdf,year,externalIds,publicationDate"}
    response = requests.get(paper_info_url + paper_id, params=queryParams)
    if response.status_code != 200:
        print(f"Error getting paper info: {response.status_code}")
    else:
        return response.json()

def get_paper_batch_info(paper_ids: list[str]):
    queryParams = {"fields": "title,abstract,authors,isOpenAccess,openAccessPdf,year,externalIds,publicationDate"}
    response = requests.post(paper_batch_info_url, json={"ids": paper_ids}, params=queryParams)
    if response.status_code != 200:
        print(f"Error getting paper batch info: {response.status_code}")
    else:
        return response.json()
