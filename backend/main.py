print("Hello, world!")
from fastapi import FastAPI

print("Valentín Minolli estuvo aquí")
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

