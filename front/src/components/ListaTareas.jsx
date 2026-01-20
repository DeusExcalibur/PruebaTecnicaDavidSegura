function ListaTareas({ tareas }) {
  if (tareas.length === 0) return <p>No hay tareas. ¡Relájate!</p>;

  return (
    <ul className="task-grid">
      {tareas.map((tarea) => (
        <li key={tarea.id} className="task-card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{tarea.title}</strong>
            <span className={`badge ${tarea.priority}`}>{tarea.priority}</span>
          </div>
          <p style={{ color: '#666', fontSize: '14px' }}>{tarea.description}</p>
          <div style={{ marginTop: '10px', fontSize: '12px' }}>
            {tarea.completed ? "✅ Completada" : "⏳ Pendiente"}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;