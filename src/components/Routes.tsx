<<<<<<< HEAD
=======
// Routes.tsx
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
<<<<<<< HEAD
import { useAuth } from './AuthContext';
=======
import { useAuth } from './AuthContext'; // Importa useAuth desde el archivo correcto
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();

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
