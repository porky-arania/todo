from pydantic import BaseModel

from datetime import datetime

import uuid


class Task(BaseModel):
    """Task object."""

    id: str
    title: str
    completed: bool


class Todo(BaseModel):
    """Todo object."""

    id: str
    created_at: datetime
    title: str
    color: str
    task: list[Task]

    def create_todo(
        *,
        title: str = "A Todo Title",
        color: str = "Red",
        task: list[Task] | None = None,
    ):
        """Create and return a sample todo."""
        if tasks is None:
            tasks = []

        todo = Todo(
            id=uuid.uuid4(),
            created_at=datetime.now(),
            title=title,
            color=color,
            task=task,
        )
        return todo
