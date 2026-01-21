import pytest
from repository.TareasRepository import (
    lista_tareas, 
    agregar_tarea, 
    obtener_todas_tareas, 
    obtener_tareas_filtradas, 
    completar_tarea
)
from models.TareasModels import CrearTarea, PriorityEnum

@pytest.fixture(autouse=True)
def clean_repository():
    lista_tareas.clear()
    lista_tareas.append({
        "id": "test-uuid-123",
        "title": "Tarea Inicial",
        "description": "Prueba",
        "priority": "LOW",
        "completed": False
    })

def test_agregar_tarea_exitosamente():
    nueva_tarea_data = CrearTarea(
        title="Estudiar Python",
        description="Repasar unit tests",
        priority=PriorityEnum.HIGH
    )
    
    agregar_tarea(nueva_tarea_data)
    
    assert len(lista_tareas) == 2
    assert lista_tareas[1]["title"] == "Estudiar Python"
    assert lista_tareas[1]["completed"] is False

def test_obtener_todas_tareas():
    tareas = obtener_todas_tareas()
    assert isinstance(tareas, list)
    assert len(tareas) == 1

def test_obtener_tareas_filtradas_completadas():
    lista_tareas[0]["completed"] = True
    
    completadas = obtener_tareas_filtradas(True)
    pendientes = obtener_tareas_filtradas(False)
    
    assert len(completadas) == 1
    assert len(pendientes) == 0

def test_completar_tarea_existente():
    tarea_id = "test-uuid-123"
    
    resultado = completar_tarea(tarea_id)
    
    assert resultado is True
    assert lista_tareas[0]["completed"] is True

def test_completar_tarea_no_existente():
    resultado = completar_tarea("id-falso")
    assert resultado is False