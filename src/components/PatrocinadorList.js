import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function PatrocinadorList() {
    const [patrocinador, setPatrocinador] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatrocinadores = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/patrocinadores/');
                setPatrocinador(response.data);
            } catch (error) {
                setError('Error al cargar los Patrocinadores');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatrocinadores();
    }, []);

    if (loading) return <div>Cargando Patrocinadores...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Patrocinadores </h1>
            <ul>
                {patrocinador.map((patrocinador) => (
                    <li key={patrocinador.id}>
                        Nombre : { patrocinador.usuario.first_name || 'No especificado'}, Apellido : { patrocinador.usuario.last_name }
                        Imagen de Perfil : {patrocinador.usuario.imagen_de_perfil || 'Imagen No especificada'},
                        Dirección : { patrocinador.usuario.direccion || 'No especificada'}, Edad : { patrocinador.usuario.edad} ,
                        Deportistas de Interes : { patrocinador.usuario.deportistas_interes || 'no especificado' }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatrocinadorList;
