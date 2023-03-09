from typing import Protocol

from todo.port.models import Todo, Task


class Database(Protocol):
    def create(self, title: str, color: str, task: list[Task] | None) -> Todo:
        ...

    def list(self) -> list:
        ...

    def get(self) -> Todo:
        ...

    def update(self) -> dict:
        ...

    def delete(self) -> None:
        ...

    def filtered_by(self, filter_by: str) -> list:
        ...
