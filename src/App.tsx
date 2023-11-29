// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';
import { AuthProvider } from './components/AuthContext'; // Importa AuthProvider
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider> {/* Agrega el AuthProvider aquí */}
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
