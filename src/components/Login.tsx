// Login.tsx
import React, { useContext, useState } from 'react';
import './css/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { login } from '../lib/api/login';

const Login: React.FC = () => {
  const { setUser, setAuthentication } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(username, password);

      setUser(username);
      setPassword(password);
      setAuthentication(true);
      navigate('/');
    } catch (e) {
      console.log("Credenciales incorrectas");
      console.error("Error fetching: ", e);
    }
    // Realiza aquí la lógica de autenticación, por ejemplo, comparar con credenciales almacenadas
    // Simulamos una autenticación exitosa en este ejemplo
    // if (username === 'root' && password === 'root') {
    //   setUser(username);
    //   setPassword(password);
    //   setAuthentication(true);
    //   navigate('/');
    // } else {
    //   console.log('Credenciales incorrectas');
    // }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
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
        <button className='login-button' onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
};

export default Login;
