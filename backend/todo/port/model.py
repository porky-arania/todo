import uuid
from datetime import datetime

from pydantic import BaseModel

ID = uuid.UUID | str


class Task(BaseModel):
    """Task object."""

    id: ID = uuid.uuid4()
    title: str
    completed: bool = False


class Todo(BaseModel):
    """Todo object."""

    id: ID = uuid.uuid4()
    created_at: datetime = datetime.now()
    title: str
    color: str
    task: list[Task]
