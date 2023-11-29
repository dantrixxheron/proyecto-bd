// Sidebar.tsx
import { IoSettings, IoReloadCircle, IoHomeSharp, IoLogOut } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import SidebarDBN from './SidebarDBN';
import './css/sidebar.css';
import { useAuth } from './AuthContext'; // Asegúrate de importar useAuth desde el archivo correcto

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user, password } = useAuth(); // Obtén el usuario y la contraseña desde el contexto
  
  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="row-setings">
          <SidebarContent icon={IoHomeSharp} onclick="#" />
          <SidebarContent icon={IoSettings} onclick={'https://github.com'} />
          <SidebarContent icon={IoReloadCircle} onclick="reload" />
          <SidebarContent icon={IoLogOut} onclick="./Login" />
        </div>
        <div className='dbnames'>
          {user && password ? <SidebarDBN/> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
