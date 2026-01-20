export const completarTareaHelper = async (id, obtenerTareas) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/tasks/${id}/complete`, {
      method: 'PUT',
    });

    if (response.ok && obtenerTareas) {
      await obtenerTareas();
    }
  } catch (error) {
    console.error("Error al completar:", error);
  }
};

export const obtenerTareasHelper = async (setTareas, setLoading) => {
  setLoading(true);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/tasks/');
    const data = await response.json();
    setTareas(data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};