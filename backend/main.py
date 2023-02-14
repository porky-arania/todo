from fastapi import FastAPI
from typing import List
from pydantic import BaseModel
from datetime import datetime


class Task(BaseModel):
    id: int
    title : str
    completed : bool

class Item_todo(BaseModel):
    id : int
    created_at : datetime
    title : str
    color : str
    task : List[Task]


app = FastAPI()

#create new todo
@app.post("/todo", response_model=Item_todo)
def create_todo(item:  Item_todo):
    return item


#Get list of todo
@app.get("/todos", response_model=Item_todo)
def get_todos():
    return Item_todo (
    id = 1,
    created_at = 2009/7/12,
    title = "Compras",
    color = "Red",
    task = [{
        "id": 2,
        "title" : "compras",
        "completed" : True,
    },
    {
        "id": 3,
        "title" : "ventas",
        "completed" : False,
    }
    ]
)


