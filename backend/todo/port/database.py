from typing import Protocol

from todo.port.models import Todo, Task


class Database(Protocol):
    def create(self, title: str, color: str, task: list[Task] | None) -> Todo:
        ...

    def list(self) -> list[Todo]:
        ...

    def get(self) -> Todo:
        ...

    def update(self) -> Todo:
        ...

    def delete(self) -> None:
        ...

    def filtered_by(self, filter_by: str) -> list:
        ...
