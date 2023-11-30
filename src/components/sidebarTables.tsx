import React from 'react';
import SidebarContent from './SidebarContent';
import { FaTable } from "react-icons/fa6";
import { useDbContext } from './contexts/dbContext';
interface SidebarTablesProps {
  tableName: string;
  index: number;
  setData?: any;
}
const SidebarTables: React.FC<SidebarTablesProps> = ({tableName, index, setData}) => {
  return (
    <div className={`${index}`}>
      <SidebarContent icon={FaTable} info={tableName} onclick={tableName} />
    </div>
  );
};
export default SidebarTables;