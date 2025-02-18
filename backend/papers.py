import requests
from langdetect import detect
paper_info_url = "http://api.semanticscholar.org/graph/v1/paper/"
paper_batch_info_url = "https://api.semanticscholar.org/graph/v1/paper/batch"
paper_recommendations_url = "http://api.semanticscholar.org/recommendations/v1/papers/"

# api_key = "1234567890" TODO: get api key

def is_english(text):
    try:
        return detect(text) == "en"
    except:
        return False


def get_paper_info(paper_id: str):
    queryParams = {"fields": "title,abstract,authors,isOpenAccess,openAccessPdf,year,externalIds,publicationDate,url"}
    response = requests.get(paper_info_url + paper_id, params=queryParams)
    if response.status_code != 200:
        print(f"Error getting paper info: {response.status_code}")
    else:
        return response.json()

def get_paper_batch_info(paper_ids: list[str]):
    queryParams = {"fields": "title,abstract,authors,isOpenAccess,openAccessPdf,year,externalIds,publicationDate,url"}
    response = requests.post(paper_batch_info_url, json={"ids": paper_ids}, params=queryParams)
    if response.status_code != 200:
        print(f"Error getting paper batch info: {response.status_code}")
    else:
        return response.json()
    
def get_paper_recs(positive_papers: list[str], negative_papers: list[str]):
    queryParams = {"limit": 500, "fields": "openAccessPdf,title"}
    response = requests.post(
        paper_recommendations_url,
        json={
            "positivePaperIds": positive_papers,
            "negativePaperIds": negative_papers
        },
        params=queryParams
    )
    if response.status_code != 200:
        print(f"Error getting paper recommendations: {response.status_code}")
        return None
    
    response_data = response.json()
    if "recommendedPapers" in response_data:
        open_access_papers = [
            paper for paper in response_data["recommendedPapers"] 
            if paper["openAccessPdf"] is not None and is_english(paper["title"])
        ]
        response_data["recommendedPapers"] = open_access_papers
        response = {"recommendedPapers": [paper["paperId"] for paper in response_data["recommendedPapers"]]}
        return response
    return None

