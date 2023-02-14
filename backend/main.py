from fastapi import  Response, FastAPI, HTTPException, status
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime


class tasks(BaseModel):
    id: int
    title : str
    completed : bool

class item_task(BaseModel):
    id : int
    created_at : datetime
    title : str
    color : str
    task : List[tasks]


app = FastAPI()


@app.post("/todo", response_model=item_task)
def created_todo(item:  item_task):
    return item


@app.get("/todos", response_model=item_task)
def get_todos():
    return item_task (
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


