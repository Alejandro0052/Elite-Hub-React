import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function DeportistaList() {
    const [deportistas, setDeportistas] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDeportistas = async () => { 
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/deportistas/');
                setDeportistas(response.data); 
            } catch (error) {
                setError('Error al cargar los deportistas');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDeportistas();
    }, []);

    if (loading) return <div>Cargando Deportistas...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Deportistas</h1>
            <ul>
                {deportistas.map((deportistas) => ( 
                       <li key={deportistas.id}> {/**/}
                        Deporte: {deportistas.deporte || 'No especificada'},
                        Nombre: {deportistas.usuario.first_name || 'No especificado'}, Apellido: {deportistas.usuario.last_name || 'No especificado' }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DeportistaList;
