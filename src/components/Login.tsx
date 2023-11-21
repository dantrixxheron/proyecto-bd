// Login.tsx
import React, { useState } from 'react';
import './css/Login.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };

    // Aquí puedes hacer lo que necesites con los datos del inicio de sesión (por ejemplo, enviarlos a un servidor)

    console.log('Datos de inicio de sesión:', loginData);
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
