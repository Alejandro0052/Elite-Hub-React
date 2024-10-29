import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext);

    // Si está autenticado, renderiza el componente hijo; si no, redirige a /login
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
