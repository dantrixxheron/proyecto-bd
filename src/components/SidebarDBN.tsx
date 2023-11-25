
import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';
import { getDatabases } from '../lib/api/getDatabases';

interface SidebarDBNProps {
  databaseName: string;
  mysqlDatabases: string[];
}

const SidebarDBN: React.FC<SidebarDBNProps> = ({ databaseName, mysqlDatabases }) => {
  const [databases, setDatabases] = useState<string[]>([]);

  useEffect(() => {
    // const databases = await getDatabases();

    // setDatabases(databases);
  }, [])

  return (
    <div>
      
        {databases.map((dbName) => (
          <SidebarContent icon={BiSolidCoinStack} info={dbName} />
        ))}
    </div>
  );
};

export default SidebarDBN;
