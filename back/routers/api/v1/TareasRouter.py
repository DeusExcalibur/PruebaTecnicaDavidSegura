from fastapi import APIRouter, HTTPException
from repository.TareasRepository import agregar_tarea, obtener_todas_tareas, obtener_tareas_filtradas, completar_tarea
from models.TareasModels import CrearTarea

router = APIRouter(prefix="/api/v1/tasks", tags=["tasks"])

@router.post(
    "/",
    summary="Agregar una tarea",
    description=(
        "Obtener informacion de una tarea y agregarle los campos faltantes para poder agregarla."
    ),
    status_code=201,
    responses={
        201: {"description": "Tarea creada con exito"},
    },
)
async def create_task(
    tarea: CrearTarea
):
    agregar_tarea(tarea)
    return {"message": "Tarea creada con exito"}

@router.get(
    "/",
    summary="Obtener tareas",
    description=(
        "Obtener tareas segun si se solicitaron filtros o no."
    ),
    status_code=200,
    responses={
        200: {"description": "Tarea obtenidas con exito"},
    },
)
async def filter_tasks(
    completed: bool | None = None
):
    if completed is None:
        return obtener_todas_tareas()
    elif completed:
        return obtener_tareas_filtradas(True)
    else:
        return obtener_tareas_filtradas(False)

@router.put(
    "/{id}/complete",
    summary="Completar tarea",
    description=(
        "Completar una tarea segun el id."
    ),
    status_code=200,
    responses={
        200: {"description": "Tarea completada con exito"},
        404: {"description": "ID no encontrado"}
    },
)
async def update_task(id: str):
    tarea_completada = completar_tarea(id)
    if tarea_completada:
        return {"message": "Tarea completada con exito"}
    if not tarea_completada:
        raise HTTPException(status_code=404, detail="ID no encontrado")