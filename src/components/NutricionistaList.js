import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function NutricionistaList() {
    const [nutricionistas, setNutricionistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNutricionistas = async () => { 
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/nutricionistas/');
                setNutricionistas(response.data); 
            } catch (error) {
                setError('Error al cargar los nutricionistas');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNutricionistas();
    }, []);

    if (loading) return <div>Cargando Nutricionistas...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de nutricionistas</h1>
            <ul>
                {nutricionistas.map((nutricionista) => ( 
                       <li key={nutricionista.id}> {/**/}
                        Especialidad: {nutricionista.especialidad || 'No especificada'},
                        Nombre: {nutricionista.usuario.first_name || 'No especificado'}, Apellido: {nutricionista.usuario.last_name || 'No especificado' }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NutricionistaList;
