import { useState } from 'react';

function FormularioTarea({ onTareaCreada }) {
  const [formData, setFormData] = useState({ title: '', description: '', priority: 'LOW' });
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación manual extra por si acaso
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

      const data = await response.json();

      if (response.ok) {
        // Si todo sale bien, ejecutamos la función que refresca y CIERRA el modal
        await onTareaCreada(); 
      } else {
        setMensaje(`Error: ${data.detail || 'Revisa los campos'}`);
      }
    } catch (error) {
      setMensaje('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input
        className="input-form"
        type="text"
        placeholder="Título de la tarea"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      
      <textarea
        placeholder="Descripción (opcional)"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />

      <select value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})}>
        <option value="LOW">Baja (LOW)</option>
        <option value="MEDIUM">Media (MEDIUM)</option>
        <option value="HIGH">Alta (HIGH)</option>
      </select>

      <button className="btn-crear" type="submit">Guardar Tarea</button>
      
      {mensaje && <p style={{ color: 'red', fontSize: '14px' }}>{mensaje}</p>}
    </form>
  );
}

export default FormularioTarea;