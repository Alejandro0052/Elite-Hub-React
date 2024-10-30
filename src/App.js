import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import UsuarioList from './components/UsuarioList'; 
import Register from './components/Register'; 
import NutricionistaList from './components/NutricionistaList'; // Cambiamos el nombre aquí
import DeportistaList from './components/DeportistaList';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} /> {/* Ruta para el registro */}
                    <Route path="/dashboard" component={Dashboard} />{/*AUN NO FUNCIONA*/}
                    <Route path="/usuarios" element={<UsuarioList />} /> {/* Ruta para mostrar la lista de usuarios */}                 
                    <Route path="/nutricionistas" element={<NutricionistaList />} /> {/* Ruta para mostrar la lista de Nutricionistas */}
                    <Route path="/deportistas" element={<DeportistaList/>} /> {/* Ruta para mostrar la lista de deportistas */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App; 

