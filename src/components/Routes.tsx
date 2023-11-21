// Routes.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    /*******EL FALSE: INICIO DE SESION PERO DEBES DETENER Y PRENDER SERVICIO*******/
    const isAuthenticated = false; // Reemplaza esto con tu lógica de autenticación
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Home />} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
