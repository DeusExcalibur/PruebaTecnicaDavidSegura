from fastapi import APIRouter
from repository.TareasRepository import agregar_tarea, obtener_todas_tareas, obtener_tareas_filtradas, completar_tarea
from models.TareasModels import CrearTarea

router = APIRouter(prefix="/api/v1/tasks", tags=["tasks"])

@router.post("/")
async def create_task(
    tarea: CrearTarea
):
    agregar_tarea(tarea)
    return {"message": "Tarea creada con exito"}

@router.get("/")
async def filter_tasks(
    completed: bool | None = None
):
    print(completed)
    if completed is None:
        return obtener_todas_tareas()
    elif completed:
        return obtener_tareas_filtradas(True)
    else:
        return obtener_tareas_filtradas(False)

@router.put("/{id}/complete")
async def update_task():
    completar_tarea()
    return {"message": "Tarea completada con exito"}