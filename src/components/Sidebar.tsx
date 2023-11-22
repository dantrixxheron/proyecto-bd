// Sidebar.tsx
import React, { useState } from 'react';
import SidebarContent from './SidebarContent';
import './css/sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="row-setings">
          <SidebarContent icon='home' onclick={()=>window.location.href='#'}/>
          <SidebarContent icon='settings' onclick={()=>window.location.href='https://github.com'}/>
          <SidebarContent icon='reload' onclick={()=>"#"}/>
          <SidebarContent icon='logout' onclick={()=>"#"}/>
        </div>
        <SidebarContent icon='db' info="Database name" onclick={()=>"#"} />
      </div>
    </div>
  );
};

export default Sidebar;
