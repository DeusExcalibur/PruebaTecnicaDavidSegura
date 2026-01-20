from models.TareasModels import CrearTarea
import uuid

lista_tareas = [
  {
  "id": "b5800b2a-0f5f-4722-811c-f580b4a30dcc",
  "title": "Aprender React",
  "description": "Repasar conceptos básicos",
  "priority": "HIGH",
  "completed": True
  },
]

def agregar_tarea(tarea: CrearTarea):
  nueva_tarea = {
        "id": str(uuid.uuid4()),
        "title": tarea.title,
        "description": tarea.description,
        "priority": tarea.priority,
        "completed": False
    }
  lista_tareas.append(nueva_tarea)
  print(lista_tareas)
  
def obtener_todas_tareas():
  return lista_tareas
  
def obtener_tareas_filtradas(valor_filtro: bool):
  return [tarea for tarea in lista_tareas if tarea["completed"] == valor_filtro]

def completar_tarea(id: str):
  for tarea in lista_tareas:
    if tarea["id"] == id:
      tarea["completed"] = True
      return True
  return False
