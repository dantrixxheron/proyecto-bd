// Login.tsx
import React, { useContext, useState } from 'react';
import './css/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { setUser, setAuthentication } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Realiza aquí la lógica de autenticación, por ejemplo, comparar con credenciales almacenadas
    // Simulamos una autenticación exitosa en este ejemplo
    if (username === 'root' && password === 'root') {
      setUser(username);
      setAuthentication(true);
      navigate('/');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div className="input-container">
          <FaUserAlt className="icon"/>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container row-settings">
          <RiLockPasswordFill className="icon"/>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
