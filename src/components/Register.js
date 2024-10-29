import React, { useState } from 'react';
import axios from '../axiosConfig'; // Asegúrate de la ruta correcta

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        userType: 'Deportista', // Valor inicial de ejemplo
    });
    const [profileImage, setProfileImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envía los datos del usuario para el registro
            const response = await axios.post('register/', formData);
            const userId = response.data.id;

            // Si se ha subido una imagen, envíala en una segunda solicitud
            if (profileImage) {
                const formData = new FormData();
                formData.append('image', profileImage);

                await axios.post('upload-image/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            alert('Registro exitoso');
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Error en el registro: ' + error.response.data.detail || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="Usuario" />
            <input type="password" name="password" onChange={handleChange} placeholder="Contraseña" />
            <select name="userType" onChange={handleChange}>
                <option value="Contenido">Contenido</option>
                <option value="Marca">Marca</option>
                <option value="Patrocinador">Patrocinador</option>
                <option value="Deportista">Deportista</option>
                <option value="PQRs">Pqrs</option>
                <option value="Deporte">Deporte</option>
                <option value="Nutricionista">Nutricionista</option>
            </select>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Registrar</button>
        </form>
    );
}

export default Register;
