<<<<<<< HEAD
print("Hello, world!")
from fastapi import FastAPI

print("Valentín Minolli estuvo aquí")
=======
from fastapi import FastAPI

>>>>>>> 5b305ba2201239271f0ed98b63972152c19552d0
from models import Todo


app = FastAPI()


<<<<<<< HEAD
@app.post("/todo", response_model=Todo)
def post_todo_endpoint(todo: Todo):
    """Create and return a Todo with the given data."""
    todo = Todo.create_todo(
          title=todo.title,
        color=todo.color,
        task=todo.task
    )
    return todo

=======
@app.get("/todos", response_model=Todo)
def get_todos():
    """Return a list of todos."""
    todo = Todo.create_todo()
    return todo


@app.post("/todo", response_model=Todo)
def post_todo(todo: Todo):
    """Create and return a custom todo."""
    return todo
>>>>>>> 5b305ba2201239271f0ed98b63972152c19552d0
