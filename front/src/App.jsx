import { useState, useEffect } from 'react'
import './App.css'
import ListaTareas from './components/ListaTareas'
import FormularioTarea from './components/FormularioTarea'

function App() {
  const [tareas, setTareas] = useState([])
  const [loading, setLoading] = useState(true) // Trigger de carga
  const [mostrarModal, setMostrarModal] = useState(false)

  const obtenerTareas = async () => {
  setLoading(true);
  
  const tiempoMinimo = new Promise(resolve => setTimeout(resolve, 1000));    

  try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/tasks/')
      const data = await response.json()
      await tiempoMinimo;
      setTareas(data)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenerTareas()
  }, [])

  const completarTarea = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/tasks/${id}/complete`, {
      method: 'PATCH',
    });

    if (response.ok) {
      await obtenerTareas();
    }
  } catch (error) {
    console.error("Error al completar:", error);
  }
};

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Cargando tus tareas</p>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Mis Tareas</h1>
        <button className="btn-crear" onClick={() => setMostrarModal(true)}>
          + Crear Tarea
        </button>
      </header>

      <ListaTareas tareas={tareas} onCompletar={completarTarea} />

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setMostrarModal(false)} style={{ float: 'right' }}>X</button>
            <h2>Nueva Tarea</h2>
            <FormularioTarea 
              onTareaCreada={() => {
                obtenerTareas();
                setMostrarModal(false); // Cierra al tener éxito
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App