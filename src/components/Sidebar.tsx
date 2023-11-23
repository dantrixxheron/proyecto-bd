// Sidebar.tsx
import React, { useState } from 'react';
import SidebarContent from './SidebarContent';
import './css/sidebar.css';
import { BiSolidCoinStack } from "react-icons/bi";
import { IoSettings, IoReloadCircle, IoHomeSharp, IoLogOut } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="row-setings">
          <SidebarContent icon={IoHomeSharp} onclick="#"/>
          <SidebarContent icon={IoSettings} onclick={'https://github.com'}/>
          <SidebarContent icon={IoReloadCircle} onclick={"#"}/>
          <SidebarContent icon={IoLogOut} onclick={"./Login"}/>
        </div>
        <div className='dbnames'>
          <SidebarContent icon={BiSolidCoinStack} info="Database name" onclick={"#"} />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
