from fastapi import FastAPI
from routers.api.v1.TareasRouter import router as tasks_router

app = FastAPI()

app.include_router(tasks_router)

