from fastapi import FastAPI

from models import Todo


app = FastAPI()


@app.get("/todos", response_model=Todo)
def get_todos():
    """Return a list of todos."""
    todo = Todo.create_todo()
    return todo


@app.post("/todo", response_model=Todo)
def post_todo(todo: Todo):
    """Create and return a custom todo."""
    return todo
