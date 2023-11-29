// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import AppRoutes from './components/Routes';
import { AuthProvider } from './components/AuthContext'; // Importa AuthProvider
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider> {/* Agrega el AuthProvider aquí */}
=======
import { AuthProvider } from './components/AuthContext'; // Asegúrate de importar AuthProvider desde el archivo correcto
import AppRoutes from './components/Routes';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
