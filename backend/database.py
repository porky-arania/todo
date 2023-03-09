from typing import Protocol

from pymongo import MongoClient

client = MongoClient("mongodb://localhost")
db = client["local"]
collection = db["todo"]
