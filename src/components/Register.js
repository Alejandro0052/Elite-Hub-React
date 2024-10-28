import React, { useState } from 'react';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            const userId = response.data.id;

            // Si se ha subido una imagen, envíala en una segunda solicitud
            if (profileImage) {
                const formData = new FormData();
                formData.append('image', profileImage);

                await axios.post('http://localhost:8000/api/upload-image/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            }

            alert('Registro exitoso');
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="Usuario" />
            <input type="password" name="password" onChange={handleChange} placeholder="Contraseña" />
            <select name="userType" onChange={handleChange}>
                <option value="Patrocinador">Patrocinador</option>
                <option value="Deportista">Deportista</option>
            </select>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Registrar</button>
        </form>
    );
}

export default Register;
