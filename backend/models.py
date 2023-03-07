from pydantic import BaseModel

from datetime import datetime

import uuid

from database import client

from pymongo import ReturnDocument


class Task(BaseModel):
    """Task object."""

    id: str = str(uuid.uuid4())
    title: str
    completed: bool = False


class Todo(BaseModel):
    """Todo object."""

    id: str = str(uuid.uuid4())
    created_at: datetime = datetime.now()
    title: str
    color: str
    task: list[Task]

    def create_todo(
        *,
        title: str = "A Todo Title.",
        color: str = "Red.",
        task: list[Task] | None = None,
    ):
        """Create and return a todo with the given data."""
        if task is None:
            task = []

        todo_data = Todo(
            id = str(uuid.uuid4()),
            created_at = datetime.now(),
            title = title,
            color = color,
            task = task,
        )

        todo = todo_data.dict()
        client.local.todo.insert_one(todo)
        return todo
        
    def get_list_of_todos():
        """Get and return a list of Todos in the system."""
        todos = list(client.local.todo.find())
        for todo in todos:
            if todo:
                todo['_id'] = str(todo['_id'])
        return todos

    def get_single_todo(id:str):
        """Get and return a specific Todo with the given ID."""
        todo = client.local.todo.find_one({'id': id})

        if todo:
            todo['_id'] = str(todo['_id'])
        return todo

    def update_todo(id:str, new_data: dict):
        """Update and return a Todo with the given ID using the new data."""
        result = client.local.todo.find_one_and_update(
            {'id': id},
            {'$set': new_data},
            return_document=ReturnDocument.AFTER,
        )
        return result
