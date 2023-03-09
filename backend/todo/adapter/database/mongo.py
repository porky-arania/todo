import uuid
from datetime import datetime

from pymongo import MongoClient

from todo.port.database import Database
from todo.port.model import Task, Todo


class Mongo(Database):
    def __init__(self) -> None:
        client = MongoClient("mongodb://localhost")
        db = client["local"]

        self.collection = db["todo"]

    def create(self, title: str, color: str, task: list[Task] | None) -> Todo:
        if task is None:
            task = []

        todo = Todo(
            id=uuid.uuid4(),
            created_at=datetime.now(),
            title=title,
            color=color,
            task=task,
        )

        todo_data = todo.dict()
        self.collection.insert_one(todo_data)

        return todo

    def list(self) -> list:
        ...

    def get(self, id: str) -> dict:
        ...

    def update(self, id: str, data: dict) -> dict:
        ...

    def delete(self, id: str) -> None:
        ...
