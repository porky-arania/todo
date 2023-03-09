from pymongo import MongoClient
from pymongo import ReturnDocument

from todo.port.models import Todo, Task
from todo.port.database import Database

import uuid

from datetime import datetime


class Mongo(Database):
    def __init__(self) -> None:
        client = MongoClient("mongodb://localhost")
        db = client["local"]
        self.collection = db["todo"]

    def create(self, title: str, color: str, task: list[Task] | None) -> Todo:
        """Create and return a todo with the given data."""
        if task is None:
            task = []

        todo = Todo(
            id=str(uuid.uuid4()),
            created_at=datetime.now(),
            title=title,
            color=color,
            task=task,
        )

        todo_data = todo.dict()
        self.collection.insert_one(todo_data)
        return todo_data

    def list(self) -> list:
        """Get and return a list of Todos in the system."""
        todos = list(self.collection.find())
        for todo in todos:
            if todo:
                todo["_id"] = str(todo["_id"])
        return todos

    def get(self, id: str) -> Todo:
        """Get and return a specific Todo with the given ID."""
        todo = self.collection.find_one({"id": id})

        if todo:
            todo["_id"] = str(todo["_id"])
        return todo

    def update(self, id: str, todo: Todo) -> dict:
        """Update and return a Todo with the given ID using the new data."""
        new_data = todo.dict(exclude_unset=True)
        todo_updated = self.collection.find_one_and_update(
            {"id": id},
            {"$set": new_data},
            return_document=ReturnDocument.AFTER,
        )
        return todo_updated

    def delete(self, id: str) -> None:
        """Delete a single Todo with the given ID."""
        self.collection.delete_one({"id": id})

    def filtered_by(self, filter_by=str) -> list:
        """Return list of Todos that comply with the received filter."""
        if filter_by == "completed":
            return list(self.collection.find({"completed": "true"}))

        if filter_by == "uncompleted":
            todos = list(self.collection.find({"completed": "false"}))
            for todo in todos:
                if todo:
                    todo["_id"] = str(todo["_id"])
            print(todos)
            return todos
