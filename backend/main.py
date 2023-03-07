from fastapi import FastAPI

from models import Todo


app = FastAPI()


@app.post("/todo", response_model=Todo)
def post_todo_endpoint(todo: Todo):
    """Create and return a Todo with the given data."""
    todo = Todo.create_todo(
          title=todo.title,
        color=todo.color,
        task=todo.task
    )
    return todo


@app.get("/todos")
def get_list_of_todos_endpoint():
    """Return a list of Todos in the system."""
    todos = Todo.get_list_of_todos()
    return todos


@app.get("/todo/{id}")
def get_single_todo_endpoint(id:str):
    """Return a single todo with the given ID."""
    todo = Todo.get_single_todo(id)
    return todo
