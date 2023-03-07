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

@app.get("/todos", response_model=Todo)
def get_todos():
    """Return a list of todos."""
    todo = Todo.create_todo()
    return todo
