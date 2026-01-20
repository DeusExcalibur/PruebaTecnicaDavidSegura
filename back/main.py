from fastapi import FastAPI

from repository.TareasRepository import tareas

app = FastAPI()

@app.get("/")
async def root():
    return {"mensaje": "Hello World"}

