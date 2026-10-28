from fastapi import FastAPI
from pydantic import BaseModel, Field
from fastapi import FastAPI, HTTPException, status
from typing import List, Optional


app = FastAPI()

class ContactSubmission(BaseModel):
    id: Optional[int] = None
    name: str = Field(..., min_length=1)
    email: str
    message: str = Field(..., min_length=1)

class PeerRecommendation(BaseModel):
    id: int
    recommender: str = Field(..., min_length=1)
    nominee: str = Field(..., min_length=1)
    skills: List[str] = []

contact_id_counter = 3

db_contacts: List[ContactSubmission] = [
    ContactSubmission(id=1, name="John Doe", email="john@example.com", message="Hello from the backend!"),
    ContactSubmission(id=2, name="Jane Doe", email="jane@example.com", message="Great portfolio application.")
]

db_recommendations: List[PeerRecommendation] = [
    PeerRecommendation(id=1, recommender="Alex", nominee="Sam", skills=["FastAPI", "Python"]),
    PeerRecommendation(id=2, recommender="Taylor", nominee="Jordan", skills=["React", "TypeScript"])
]


@app.post("/api/contact", response_model=ContactSubmission,
          status_code=status.HTTP_201_CREATED)
def create_contact(submission, ContactSubmission):
    global contact_id_counter
    submission.id = contact_id_counter
    contact_id_counter += 1
    db.contacts.append(submission)
    return submission

@app.get("/api/recommendations", response_model=List[PeerRecommendation], status_code=status.HTTP_200_OK)
def get_all_recommendations():
    return db_recommendations


@app.delete("/api/recommendations/{recommendation_id}",
         status_code=status.HTTP_200_OK)
def delete_recommendation(recommendation_id: int):
    for index, rec in enumerate(db_recommendations):
        if rec.id == recommendation_id:
            deleted_item = db_recommendations.pop(index)
            return {"message": "Success", "deleted_item": deleted_item}
            
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, 
        detail=f"Recommendation with ID {recommendation_id} not found."
    )


