from typing import Protocol

from todo.port.model import Todo


class Database(Protocol):
    def create(self, title: str, color: str, task: list[str] | None) -> Todo:
        ...

    def list(self) -> list:
        ...

    def get(self, id: str) -> dict:
        ...

    def update(self, id: str, data: dict) -> dict:
        ...

    def delete(self, id: str) -> None:
        ...
