import React from 'react';
import SidebarContent from './SidebarContent';
import { FaTable } from "react-icons/fa6";

interface SidebarTablesProps {
  tableName: string;
  index: number;
}
const SidebarTables: React.FC<SidebarTablesProps> = ({tableName, index}) => {

  return (
    <div className={`${index}`}>
      <SidebarContent icon={FaTable} info={tableName} onclick='table' />
    </div>
  );
};
export default SidebarTables;