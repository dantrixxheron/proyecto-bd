
import React from 'react';
import SidebarContent from './SidebarContent';
import { BiSolidCoinStack } from 'react-icons/bi';

interface SidebarDBNProps {
  databaseName: string;
  mysqlDatabases: string[];
}

const SidebarDBN: React.FC<SidebarDBNProps> = ({ databaseName, mysqlDatabases }) => {
  return (
    <div>
      <h2>Database Name: {databaseName}</h2>
      <h3>MySQL Databases:</h3>
      <ul>
        {mysqlDatabases.map((dbName) => (
          <SidebarContent icon={BiSolidCoinStack} info={dbName} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarDBN;
