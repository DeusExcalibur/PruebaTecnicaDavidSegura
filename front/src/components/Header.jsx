const Header = ({ filtro, setFiltro, setMostrarModal }) => (
  <header className="app-header">
    <div className="header-content">
      <h1 className="app-title">Mis Tareas</h1>
      <p className="app-subtitle">Gestiona tus tareas</p>
    </div>
    <div className="header-actions">
      <select
        className="filtro-select"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="pending">Pendientes</option>
        <option value="completed">Completadas</option>
      </select>
      <button className="btn-crear-tarea" onClick={() => setMostrarModal(true)}>
        + Crear Tarea
      </button>
    </div>
  </header>
);

export default Header;