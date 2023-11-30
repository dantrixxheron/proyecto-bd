import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface DataContextProviderProps {
  children: ReactNode;
}

interface DataContextType {
  data: any[] | [];
  setData: Dispatch<SetStateAction<any | null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDbContext debe ser utilizado dentro de un proveedor DbContext");
  }
  return context;
};

export { useData, DataContext, DataContextProvider };
