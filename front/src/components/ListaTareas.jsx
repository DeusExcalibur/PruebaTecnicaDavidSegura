import './ListaTareas.css';

function ListaTareas({ tareas, onCompletar }) {
  if (tareas.length === 0) return <p className="app-subtitle">No hay tareas. ¡Relájate!</p>;

  return (
    <ul className="task-grid">
      {tareas.map((tarea) => (
        <li key={tarea.id} className="task-card">
          <div className="task-card-header">
            <strong className="task-card-title">{tarea.title}</strong>
            <span className={`badge ${tarea.priority}`}>{tarea.priority}</span>
          </div>
          
          <p className="task-card-description">{tarea.description}</p>
          
          <div className="task-card-footer">
            <span>{tarea.completed ? "✅ Completada" : "⏳ Pendiente"}</span>
            
            {!tarea.completed && (
              <button 
                className="btn-completar"
                onClick={() => onCompletar(tarea.id)}
              >
                Completar
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;