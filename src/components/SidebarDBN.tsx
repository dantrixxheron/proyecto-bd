import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import { getDatabases } from '../lib/api/getDatabases';
import { useAuth } from './AuthContext'; // Importa useAuth desde el archivo correcto


const SidebarDBN: React.FC = () => {
  const [databases, setDatabases] = useState<string[]>([]);
  const { user, password } = useAuth(); // Obtén el usuario y la contraseña desde el contexto

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && password) {
          const databasesResult = await getDatabases(user, password); // Pasa el usuario y la contraseña
          setDatabases(databasesResult || []); // Actualiza el estado con los resultados o un array vacío
        }
      } catch (error) {
        console.error('Error al obtener las bases de datos:', error);
      }
    };

    fetchData(); // Llama a la función fetchData dentro del useEffect
  }, [user, password]); // Asegúrate de incluir user y password como dependencias del useEffect

  return (
    <div>
      {databases.map((dbName) => (
        <SidebarContent key={dbName} icon={BiSolidCoinStack} info={dbName} />
      ))}
    </div>
  );
};

export default SidebarDBN;
