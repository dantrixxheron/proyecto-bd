// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';
import { AuthProvider } from './components/AuthContext'; // Importa AuthProvider
import './App.css';
import { DbContextProvider } from './components/dbContext';
const App: React.FC = () => {
  return (

    <Router>
      <AuthProvider> {/* Agrega el AuthProvider aquí */}
        <DbContextProvider>
          <AppRoutes />
        </DbContextProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
