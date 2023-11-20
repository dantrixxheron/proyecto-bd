// Sidebar.tsx
import React, { useState } from 'react';
import SidebarContent from './SidebarContent';
import './css/sidebar.css';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import textbox from './Textbox'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <IoArrowBack />: <IoArrowForward/>}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Agrega aquí el contenido de tu barra lateral */}
        <div className="row-setings">
          <SidebarContent icon='home' onclick={()=>window.location.href='#'}/>
          <SidebarContent icon='settings' onclick={()=>window.location.href='https://github.com'}/>
          <SidebarContent icon='reload' onclick={()=>"#"}/>
        </div>
        <SidebarContent icon='db' info="Database name" onclick={()=>"#"} />
      </div>
    </div>
  );
};

export default Sidebar;
