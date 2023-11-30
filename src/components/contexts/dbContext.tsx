import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface DbContextProviderProps {
  children: ReactNode;
}

interface DbContextType {
  database: string | null;
  table: string | null;
  setDatabase: Dispatch<SetStateAction<string | null>>;
  setTable: Dispatch<SetStateAction<string | null>>;
}

const DbContext = createContext<DbContextType | undefined>(undefined);

const DbContextProvider: React.FC<DbContextProviderProps> = ({ children }) => {
  const [database, setDatabase] = useState<string | null>(null);
  const [table, setTable] = useState<string | null>(null);

  return (
    <DbContext.Provider value={{ database, table, setDatabase, setTable }}>
      {children}
    </DbContext.Provider>
  );
};

const useDbContext = (): DbContextType => {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error("useDbContext debe ser utilizado dentro de un proveedor DbContext");
  }
  return context;
};

export { useDbContext, DbContext, DbContextProvider };
