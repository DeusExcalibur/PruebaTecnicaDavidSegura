# PruebaTecnicaDavidSegura

### Backend (FastAPI)
- **Models:** Definición y validación de esquemas de datos utilizando Pydantic.
- **Repository:** Capa de persistencia que actúa como única fuente de verdad. Centraliza el acceso y la manipulación de los datos para evitar efectos secundarios desde otras capas.
- **Router:** Manejo de rutas y endpoints siguiendo principios REST.
- **Main:** Punto de entrada que orquesta la configuración de la API.

### Frontend (React)
- **Componentes:** División de la UI en componentes independientes y reutilizables.
- **Estilos:** Cada componente cuenta con su propio archivo CSS para evitar colisiones de estilos.
- **Utils/Helpers:** Centralización de las peticiones HTTP para mejorar la legibilidad del código y facilitar el mantenimiento. 

## Instalación y Configuración

1. Clonar el repositorio
```bash
git clone https://github.com/DeusExcalibur/PruebaTecnicaDavidSegura.git
```

2. Backend (Python + FastAPI)
Desde una nueva terminal:

```bash
cd back
```
Crear entorno virtual
```bash
python -m venv venv
```
Activar entorno (Windows)
```bash
.\venv\Scripts\activate
```
Activar entorno (macOS/Linux)
```bash
source venv/bin/activate
```
Instalar dependencias
```bash
pip install -r requirements.txt
```
Ejecutar en modo desarrollo
```bash
fastapi dev main.py
```

Para ejecutar los tests unitarios:
```bash
python -m pytest tests/TestTareasRepository.py -v
```

3. Frontend (React + Vite)
Desde una nueva terminal:

```bash
cd front
npm install
npm run dev
```