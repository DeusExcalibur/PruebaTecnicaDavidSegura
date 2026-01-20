import { useState } from 'react';
import './FormularioTarea.css';

function FormularioTarea({ onTareaCreada }) {
  const [formData, setFormData] = useState({ title: '', description: '', priority: 'LOW' });
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setMensaje("¡El título es obligatorio!");
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/tasks/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        await onTareaCreada(); 
      } else {
        const data = await response.json();
        setMensaje(`Error: ${data.detail || 'Revisa los campos'}`);
      }
    } catch (error) {
      setMensaje('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        className="input-field"
        type="text"
        placeholder="Título de la tarea (Obligatorio)"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      <textarea
        className="input-field"
        placeholder="Descripción (Opcional)"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <select 
        className="input-field form-select" 
        value={formData.priority} 
        onChange={(e) => setFormData({...formData, priority: e.target.value})}
      >
        <option value="LOW">Baja (LOW)</option>
        <option value="MEDIUM">Media (MEDIUM)</option>
        <option value="HIGH">Alta (HIGH)</option>
      </select>
      <button className="btn-crear-tarea" type="submit">Guardar Tarea</button>
      {mensaje && <p className="error-text">{mensaje}</p>}
    </form>
  );
}

export default FormularioTarea;