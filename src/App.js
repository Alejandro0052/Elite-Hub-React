import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import UsuarioList from './components/UsuarioList'; // Asegúrate de que la ruta sea correcta
import Register from './components/Register'; // Importamos el componente Register

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} /> {/* Ruta para el registro */}
                    {/* Envolvemos Dashboard en ProtectedRoute */}
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/usuarios" element={<UsuarioList />} /> {/* Ruta para mostrar la lista de usuarios */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
