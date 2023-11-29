
import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { FaTable } from "react-icons/fa6";
import { getDatabases } from '../lib/api/getDatabases';
import { useAuth } from './AuthContext'; // Asegúrate de importar useAuth desde el archivo correcto

const SidebarTables: React.FC = () => {
  const [databases, setDatabases] = useState<string[]>([]);
  const { user, password } = useAuth();

  const fetchData = async () => {
    try {
      if (user && password) {
        const databases = await getDatabases(user, password);
        setDatabases(databases || []);
      }
    } catch (error) {
      console.error('Error fetching databases:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, password]
  );

  return (
    <div>
      {databases.map((dbName) => (
        <SidebarContent key={dbName} icon={FaTable} info={dbName} />
      ))}
    </div>
  );
};
export default SidebarTables;