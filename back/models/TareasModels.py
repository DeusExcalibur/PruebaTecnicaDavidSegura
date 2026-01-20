from pydantic import BaseModel

class Tarea(BaseModel):
    id: str
    title: str
    description: str
    priority: str
    completed: bool
    
class CrearTarea(BaseModel):
    title: str
    description: str
    priority: str
