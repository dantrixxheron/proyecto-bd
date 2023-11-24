// Sidebar.tsx
import { IoSettings, IoReloadCircle, IoHomeSharp, IoLogOut } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import SidebarDBN from './SidebarDBN';
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
          <SidebarDBN databaseName="mysql" mysqlDatabases={[]}/>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
