// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';
import { AuthProvider } from './components/contexts/AuthContext'; // Importa AuthProvider
import './App.css';
import { DbContextProvider } from './components/contexts/dbContext';
import { DataContextProvider } from './components/contexts/dataContext';
const App: React.FC = () => {
  return (

    <Router>
      <AuthProvider> {/* Agrega el AuthProvider aquí */}
        <DbContextProvider>
          <DataContextProvider>
            <AppRoutes />
          </DataContextProvider>
        </DbContextProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
