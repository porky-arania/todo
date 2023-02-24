from fastapi import FastAPI

from models import Todo

from datetime import datetime


app = FastAPI()


def create_todo():
    """Create and return a sample todo."""
    defaults = {
        "id": 0,
        "created_at": datetime.now(),
        "title": "A Todo Title.",
        "color": "Red",
        "task": [
            {
                "id": 0,
                "title": "A Task Title.",
                "completed": False,
            },
        ]
    }

    todo = Todo(**defaults)
    return todo 


@app.get("/todos", response_model=Todo)
def get_todos():
    """Return a list of todos."""
    todo = create_todo()
    return todo


@app.post("/todo", response_model=Todo)
def post_todo(todo:Todo):
    """Create and return a custom todo."""
    return todo
