import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; 

function MarcasList() {
    const [marca, setMarcas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/marcas/');
                setMarcas(response.data);
            } catch (error) {
                setError('Error al cargar las marcas');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarcas();
    }, []);

    if (loading) return <div>Cargando Marcas...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Marcas </h1>
            <ul>
                {marca.map((marca) => (
                    <li key={marca.id}>
                        Nombre : { marca.usuario.first_name || 'No especificado'}, Apellido : { marca.usuario.last_name }
                        Imagen de Perfil : {marca.usuario.imagen_de_perfil || 'Imagen No especificada'},
                        Dirección : { marca.usuario.direccion || 'No especificada'}, Edad : { marca.usuario.edad || 'No especificada'} ,
                        Razon Social : { marca.usuario.razon_social || 'No especificada'},
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MarcasList;
