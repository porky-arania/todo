from fastapi import FastAPI

from models import Todo


app = FastAPI()


@app.get("/todos", response_model=Todo)
def get_todos():
    """Get a list of todos."""
    return Todo(
        id=1,
        created_at=12 / 7 / 2007,
        title="Compras",
        color="Red",
        task=[
            {
                "id": 2,
                "title": "compras",
                "completed": True,
            },
            {
                "id": 3,
                "title": "ventas",
                "completed": False,
            },
        ],
    )
