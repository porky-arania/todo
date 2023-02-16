from pydantic import BaseModel

from datetime import datetime

from typing import List


class Task(BaseModel):
    """Class for tasks."""

    id: int
    title: str
    completed: bool


class Todo(BaseModel):
    """Class for todos."""

    id: int
    created_at: datetime
    title: str
    color: str
    task: List[Task]
