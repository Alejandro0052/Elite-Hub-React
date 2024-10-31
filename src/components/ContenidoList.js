import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function ContenidoList() {
    const [contenidos, setContenidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContenidos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/contenidos/');
                setContenidos(response.data);
            } catch (error) {
                setError('Error al cargar las Contenidos');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchContenidos();
    }, []);

    if (loading) return <div>Cargando Contenios...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Contenidos </h1>
            <ul>
                {contenidos.map((contenidos) => (
                    <li key={contenidos.id}>
                        Nombre : { contenidos.usuario.first_name || 'No especificado'}, Apellido : { contenidos.usuario.last_name }
                        Dirección : { contenidos.usuario.direccion || 'No especificada'}, Edad : { contenidos.usuario.edad || 'No especificada'} ,
                        Titulo : { contenidos.titulo || 'No especificada'},  Descripcion : { contenidos.descripcion || 'No especificada'},
                        Adjunto : {contenidos.contenido_imagen || 'No especificado'},
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContenidoList;
