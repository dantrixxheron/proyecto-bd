<<<<<<< HEAD
import React, { useState } from 'react';
import './css/Login.css';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useAuth } from './AuthContext';
=======
// Login.tsx
import React, { useContext, useState } from 'react';
import './css/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from './AuthContext'; 
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
import { useNavigate } from 'react-router-dom';
import { login } from '../lib/api/login';

const Login: React.FC = () => {
<<<<<<< HEAD
  const { setUser, setPassword, setAuthentication } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPasswordInput] = useState('');
=======
  const { setUser, setAuthentication } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(username, password);
<<<<<<< HEAD
      if (res==null) {
        console.log('Credenciales incorrectas');
        return;
      }
=======

>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
      setUser(username);
      setPassword(password);
      setAuthentication(true);
      navigate('/');
    } catch (e) {
<<<<<<< HEAD
      console.log('Credenciales incorrectas');
      console.error('Error fetching: ', e);
    }

=======
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
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <div className="input-container">
<<<<<<< HEAD
          <FaUserAlt className="icon" />
=======
          <FaUserAlt className="icon"/>
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container row-settings">
<<<<<<< HEAD
          <RiLockPasswordFill className="icon" />
=======
          <RiLockPasswordFill className="icon"/>
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
<<<<<<< HEAD
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Ingresar
        </button>
=======
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='login-button' onClick={handleLogin}>Ingresar</button>
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
      </div>
    </div>
  );
};

export default Login;
