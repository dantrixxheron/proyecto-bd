
import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import { getDatabases } from '../lib/api/getDatabases';
import { useAuth } from './AuthContext'; // Asegúrate de importar useAuth desde el archivo correcto

const SidebarDBN: React.FC = ({}) => {
  const [databases, setDatabases] = useState<string[]>([]);
  const { user, password } = useAuth(); // Obtén el usuario y la contraseña desde el contexto
  useEffect(() => {
    if (user && password) {
      const fetchData = async () => {
        const databases = await getDatabases(user, password);
        setDatabases(databases);
      };
      fetchData();
    }
  }, [user, password]);

  return (
    <div>
        {databases.map((dbName) => (
          <SidebarContent icon={BiSolidCoinStack} info={dbName} />
        ))}
    </div>
  );
};

export default SidebarDBN;
