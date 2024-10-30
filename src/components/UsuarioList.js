import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function UsuarioList() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/usuarios/');
                setUsuarios(response.data);
            } catch (error) {
                setError('Error al cargar los usuarios');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    if (loading) return <div>Cargando usuarios...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        Nombre: {usuario.first_name || 'No especificado'}, Apellido: {usuario.last_name}
                        Imagen de Perfil: {usuario.imagen_de_perfil || 'Imagen No especificada'},
                        Dirección: {usuario.direccion || 'No especificada'}, Edad: {usuario.edad}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsuarioList;
