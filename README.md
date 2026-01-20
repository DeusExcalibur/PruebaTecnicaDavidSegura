# PruebaTecnicaDavidSegura

#Backend
Se manejo un backend sencillo donde se tiene models para validación de datos
Repository que es el diccionario donde se obtienen y modifican los datos junto a los metodos para modificar estos mismos
y que no se puedan modificar desde otra capa
Router para las distintas rutas del aplicativo y sus metodos 
Y el archivo main que llama al router
Se decidio manejarlo de esta forma y no utilizar services, o un orquestador por motivos de simplicidad y legibilidad

Para ejecutar el Backend crear una terminal nueva:
cd back
python -m venv venv
venv\Scripts\activate
fastapi dev main.py

Para ejecutar los tests ejecutar:
python -m pytest tests/TestTareasRepository.py -v
