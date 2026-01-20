from fastapi import APIRouter
from repository.TareasRepository import agregar_tarea
from models.TareasModels import CrearTarea

router = APIRouter(prefix="/api/v1/tasks", tags=["tasks"])

@router.post("/")
async def create_task(
    tarea: CrearTarea
):
    agregar_tarea(tarea)
    return {"message": "Tarea creada con exito"}