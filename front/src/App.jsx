import { useState, useEffect } from 'react'
import './App.css'
import ListaTareas from './components/ListaTareas'
import FormularioTarea from './components/FormularioTarea'
import Loading from './components/Loading'
import Header from './components/Header';
import { obtenerTareasHelper, completarTareaHelper } from './utils/peticiones';

function App() {
  const [tareas, setTareas] = useState([])
  const [loading, setLoading] = useState(true)
  const [mostrarModal, setMostrarModal] = useState(false)
  const [filtro, setFiltro] = useState('all')

  const obtenerTareas = async () => {
    await obtenerTareasHelper(setTareas, setLoading);
  };

  useEffect(() => {
    obtenerTareas()
  }, [])

  const completarTarea = async (id) => {
    await completarTareaHelper(id, obtenerTareas);
  };

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'completed') return t.completed;
    if (filtro === 'pending') return !t.completed;
    return true;
  });

  if (loading) {
    return <Loading />
  }

  return (
    <div className="app-container">
      <Header filtro={filtro} setFiltro={setFiltro} setMostrarModal={setMostrarModal} />

      <ListaTareas tareas={tareasFiltradas} onCompletar={completarTarea} />
      
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="btn-cerrar-modal" onClick={() => setMostrarModal(false)}>×</button>
            <h2>Nueva Tarea</h2>
            <FormularioTarea 
              onTareaCreada={() => {
                obtenerTareas();
                setMostrarModal(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App;