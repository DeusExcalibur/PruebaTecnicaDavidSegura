from enum import Enum
from pydantic import BaseModel, Field

class Tarea(BaseModel):
    id: str
    title: str
    description: str
    priority: str
    completed: bool

class PriorityEnum(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    
class CrearTarea(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    description: str 
    priority: PriorityEnum
