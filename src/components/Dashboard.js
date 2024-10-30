import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Panel de Control</h2>
                <ul>
                    <li><a href="/usuarios">Usuarios</a></li>
                    <li><a href="/configuracion">Configuración</a></li>
                    <li><a href="/reportes">Reportes</a></li>
                    <li><a href="/perfil">Perfil</a></li>
                    <li><a href="/logout">Cerrar Sesión</a></li>
                </ul>
            </aside>
            <main className="main-content">
                <h1>Bienvenido al Dashboard</h1>
                <div className="summary-cards">
                    <div className="card">
                        <h3>Usuarios Activos</h3>
                        <p>150</p>
                    </div>
                    <div className="card">
                        <h3>Nuevas Inscripciones</h3>
                        <p>30</p>
                    </div>
                    <div className="card">
                        <h3>Visitas del Mes</h3>
                        <p>1200</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
