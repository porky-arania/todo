from fastapi import FastAPI

from models import Todo, Task

from datetime import datetime


app = FastAPI()


def create_todo(
        *,
        title: str = "A Todo Title",
        color: str = "Red",
        task: list[Task] | None = None,
):
    """Create and return a sample todo."""
    if tasks is None:
            tasks = []

    todo = Todo(...)
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

