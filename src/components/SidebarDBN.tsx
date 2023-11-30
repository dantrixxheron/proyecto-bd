
import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import { getDatabases } from '../lib/api/getDatabases';
import { useAuth } from './contexts/AuthContext'; // Asegúrate de importar useAuth desde el archivo correcto

interface SidebarDBNProps {
  setData?: any;
}

const SidebarDBN: React.FC<SidebarDBNProps> = (setData) => {
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
        <SidebarContent key={dbName} icon={BiSolidCoinStack} info={dbName} onclick='use'/>
      ))}
    </div>
  );
};
export default SidebarDBN;