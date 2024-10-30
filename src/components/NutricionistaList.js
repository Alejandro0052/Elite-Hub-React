import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function NutricionistaList() {
    const [nutricionistas, setNutricionistas] = useState([]); // Cambiado a nutricionistas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNutricionistas = async () => { // Cambié el nombre a fetchNutricionistas
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/nutricionistas/');
                setNutricionistas(response.data); // Cambié setUsuarios a setNutricionistas
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
                {nutricionistas.map((nutricionista) => ( // Cambié usuarios a nutricionistas
                    <li key={nutricionista.id}> {/* Usa un identificador único */}
                        Especialidad: {nutricionista.especialidad || 'No especificada'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NutricionistaList;
