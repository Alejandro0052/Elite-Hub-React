import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import UsuarioList from './components/UsuarioList'; 
import Register from './components/Register'; 
import NutricionistaList from './components/NutricionistaList'; // Cambiamos el nombre aquí

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
                    <Route path="/nustricionistas" element={<ProtectedRoute><NutricionistaList /></ProtectedRoute>} /> {/* Cambiamos a NutricionistaList aquí */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App; 

