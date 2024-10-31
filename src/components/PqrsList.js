import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function PqrsList() {
    const [pqrs, setPqrs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPqrs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/pqrs/');
                setPqrs(response.data);
            } catch (error) {
                setError('Error al cargar las Pqrs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPqrs();
    }, []);

    if (loading) return <div>Cargando Pqrs...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Pqrs </h1>
            <ul>
                {pqrs.map((pqrs) => (
                    <li key={pqrs.id}>
                        Nombre : { pqrs.usuario.first_name || 'No especificado'}, Apellido : { pqrs.usuario.last_name }
                        Imagen de Perfil : {pqrs.usuario.imagen_de_perfil || 'Imagen No especificada'},
                        Dirección : { pqrs.usuario.direccion || 'No especificada'}, Edad : { pqrs.usuario.edad} ,
                        Tipo : { pqrs.usuario.tipo || 'no especificado' }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PqrsList;
