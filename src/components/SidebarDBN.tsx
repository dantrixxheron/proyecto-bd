
import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import { getDatabases } from '../lib/api/getDatabases';
import { useAuth } from './AuthContext'; // Asegúrate de importar useAuth desde el archivo correcto

const SidebarDBN: React.FC = () => {
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
<<<<<<< HEAD
  }, [user, password]
  );
=======
  }, [user, password]);
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6

  return (
    <div>
      {databases.map((dbName) => (
<<<<<<< HEAD
        <SidebarContent key={dbName} icon={BiSolidCoinStack} info={dbName} onclick='use' />
=======
        <SidebarContent key={dbName} icon={BiSolidCoinStack} info={dbName} />
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
      ))}
    </div>
  );
};
export default SidebarDBN;