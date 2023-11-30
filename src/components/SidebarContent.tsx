/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ElementType } from "react";
import { useDatabase } from "../lib/api/useDatabase";
import { useAuth } from "./contexts/AuthContext";
import { useDbContext } from "./contexts/dbContext";
import SidebarTables from "./sidebarTables";
import { getTableContent } from "../lib/api/getTableContent";
import { useData } from './contexts/dataContext';
 
interface SidebarContentProps {
  icon: ElementType;
  info?: string;
  onclick?: string;
}
const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
  const [tables, setTables] =  useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { user, password } = useAuth();
  const { setDatabase, setTable } = useDbContext();
  const {table, database  } = useDbContext();
  const [showTables, setShowTables] = useState(false);
  const { setData } = useData();
  
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
    const onCEvent = async () => {
      setIsActive(!isActive);
      if (onclick==="use") {
        clickDB();
      }
      else if(onclick==="table"){
        console.log(info);
      }
      else if(onclick==="reload"){
        window.location.reload();
      }
      else if (onclick!==undefined) {
        if (onclick.includes("/") || onclick.includes("#")) {
          window.location.href = onclick;
        } else {
          try {
            // SetTable
            if (onclick!==undefined)
            setTable(onclick)
            console.log(!user, !password, !database, !onclick)
            // EndPoint
            if(!user || !password || !database || !onclick) {
              throw new Error("Error fetching: ");
            }
            const res = await getTableContent(user, password, database, onclick);
            setData(res || []);
          } catch (e: any) {
            console.log(e.message);
          }
        }
      }
    }
  return (
    <div className={`text-sidebar ${isActive ? 'active' : ''}`}>
      <p onClick={onCEvent}>
        {React.createElement(icon)} {typeof info === 'string' && <span>{info}</span>}
      </p>
        {showTables && tables.map((table:string, index: number) => (
          <SidebarTables key={table} tableName={table} index={index} setData={setData}/>
          ))}
    </div>
  );
};

export default SidebarContent;