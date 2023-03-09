from fastapi import FastAPI

from todo.adapter.database.mongo import Mongo
from todo.port.model import Todo

app = FastAPI()
todo_db = Mongo()


@app.post("/todo", response_model=Todo)
def post_todo_endpoint(todo: Todo):
    """Create and return a Todo with the given data."""
    todo = todo_db.create(title=todo.title, color=todo.color, task=todo.task)
    return todo


@app.get("/todos")
def get_list_of_todos_endpoint():
    """Return a list of Todos in the system."""
    todos = Todo.get_list_of_todos()
    return todos


@app.get("/todo/{id}")
def get_single_todo_endpoint(id: str):
    """Return a single todo with the given ID."""
    todo = Todo.get_single_todo(id)
    return todo


@app.put("/todo/{id}", response_model=Todo)
def update_todo_endpoint(id: str, todo_data: Todo):
    """Update and return an updated Todo with the given ID using the new data."""
    new_data = todo_data.dict(exclude_unset=True)
    updated_todo = Todo.update_todo(id, new_data)
    return updated_todo


@app.delete("/todo/{id}")
def delete_single_todo_endpoint(id: str):
    """Delete a single Todo with the given ID."""
    Todo.delete_todo(id)
