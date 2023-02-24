from pydantic import BaseModel

from datetime import datetime


class Task(BaseModel):
    """Task object."""
    id: int
    title: str
    completed: bool


class Todo(BaseModel):
    """Todo object."""
    id: int
    created_at: datetime
    title: str
    color: str
    task: list[Task]
