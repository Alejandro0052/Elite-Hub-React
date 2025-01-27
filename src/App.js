import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UsuarioList from './components/UsuarioList'; 
import Register from './components/Register'; 
import NutricionistaList from './components/NutricionistaList'; 
import DeportistaList from './components/DeportistaList'; 
import PatrocinadorList from './components/PatrocinadorList';
import MarcaList from './components/MarcaList';
import PqrsList  from './components/PqrsList';
import ContenidoList from './components/ContenidoList';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} /> {/* Ruta para el registro */}
                    <Route path="/dashboard" component={Dashboard} />{/*AUN NO FUNCIONA*/}
                    <Route path="/usuarios" element={<UsuarioList />} /> {/* Ruta para mostrar la lista de usuarios */}                 
                    <Route path="/nutricionistas" element={<NutricionistaList/>} /> {/* Ruta para mostrar la lista de Nutricionistas */}
                    <Route path="/deportistas" element={<DeportistaList/>}/> {/* Ruta para mostrar la lista de deportistas */}
                    <Route path="/patrocinadores" element={<PatrocinadorList/>} /> {/* Ruta para mostrar la lista de patrocinadores */}
                    <Route path="/marcas" element={<MarcaList/>} /> {/* Ruta para mostrar la lista de las marcas */}
                    <Route path="/pqrs" element={<PqrsList/>} /> {/* Ruta para mostrar la lista de las pqrs */}
                    <Route path="/contenidos" element={<ContenidoList/>} /> {/* Ruta para mostrar la lista de las pqrs */}
                </Routes>
            </Router>
        </AuthProvider>
    );
} 

export default App; 

