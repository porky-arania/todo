from fastapi import FastAPI

from todo.port.models import Todo
from todo.adapter.database.mongo import Mongo


app = FastAPI()
db = Mongo()


@app.post("/todo", response_model=Todo)
def post_todo(todo: Todo) -> Todo:
    """Create and return a Todo with the given data."""
    return db.create(title=todo.title, color=todo.color, task=todo.task)


@app.get("/todos")
def get_todos_list(filter_by:str=None) -> list:
    """Return a list of Todos in the system by filtering or not."""
    if filter_by is not None:
            return db.filtered_by(filter_by)
    
    return db.list()


@app.get("/todo/{id}")
def get_todo(id: str) -> Todo:
    """Return a single todo with the given ID."""
    return db.get(id)


@app.put("/todo/{id}", response_model=Todo)
def update_todo(id: str, new_todo_data: Todo) -> dict:
    """
    Update and return an updated Todo with the given ID using the new data.
    """
    return db.update(id, new_todo_data)


@app.delete("/todo/{id}")
def delete_todo(id: str) -> None:
    """Delete a single Todo with the given ID."""
    db.delete(id)
