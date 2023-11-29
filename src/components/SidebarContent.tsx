/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ElementType } from "react";
import { useDatabase } from "../lib/api/useDatabase";
import { useAuth } from "./AuthContext";
import { useDbContext } from "./dbContext";

interface SidebarContentProps {
  icon: ElementType;
  info?: string;
  onclick?: string;
}
const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
  type DatabaseState = { [key: string]: string | string[] };
  const [databases, setDatabases] = useState<DatabaseState>({});
  const [isActive, setIsActive] = useState(false);
  const { user, password } = useAuth();
  const { setDatabase } = useDbContext();
  
  const clickDB = async () => {
    try {
      if (user && password && info) {
        const databases_res = await useDatabase(user, password, info);
        setDatabases({database: databases_res.database,table:databases_res.tables} || {});
        setDatabase(info);
        console.log({database: databases_res.database,table:databases_res.tables});
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
        {React.createElement(icon)} {typeof info === "string" && <span>{info}</span>}
      </p>
    </div>
  );
};

export default SidebarContent;