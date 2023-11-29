/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ElementType } from "react";
import { useDatabase } from "../lib/api/useDatabase";
import { useAuth } from "./AuthContext";
import { useDbContext } from "./dbContext";
import SidebarTables from "./sidebarTables";

interface SidebarContentProps {
  icon: ElementType;
  info?: string;
  onclick?: string;
}
const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
  const [tables, setTables] =  useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { user, password } = useAuth();
  const { setDatabase } = useDbContext();
  const [showTables, setShowTables] = useState(false);
  
  const clickDB = async () => {
    try {
      if (user && password && info) {
        const databases_res = await useDatabase(user, password, info);
        setTables(databases_res.tables || [] );
        setDatabase(info);
        setShowTables(true);
      }
    } catch (error) {
      console.error('Error using database:', error);
    }
  };
    const onCEvent = () => {
      setIsActive(!isActive);
      if (onclick==="use") {
        clickDB();
      }
      else if(onclick==="table"){
        console.log("table");
      }
      else if(onclick==="reload"){
        window.location.reload();
      }
      else {
        if (onclick){
          window.location.href = onclick;
        }
      }
    }
  return (
    <div className={`text-sidebar ${isActive ? 'active' : ''}`}>
      <p onClick={onCEvent}>
        {React.createElement(icon)} {typeof info === 'string' && <span>{info}</span>}
      </p>
        {showTables && tables.map((table:string, index: number) => (
          <SidebarTables key={table} tableName={table} index={index}/>
          ))}
    </div>
  );
};

export default SidebarContent;