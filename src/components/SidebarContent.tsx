/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ElementType } from "react";
import { useDatabase } from "../lib/api/useDatabase";
import { useAuth } from "./AuthContext";

interface SidebarContentProps {
  icon: ElementType;
  info?: string;
  onclick?: string;
}
const SidebarContent: React.FC<SidebarContentProps> = ({ icon, info, onclick }) => {
  const [databases, setDatabases] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { user, password } = useAuth();
  
  const clickDB = async () => {
    try {
      if (user && password && info) {
        const databases = await useDatabase(user, password, info);
        setDatabases(databases || []);
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