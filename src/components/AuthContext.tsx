import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: string | null;
  password: string | null;
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<string | null>>;
  setPassword: Dispatch<SetStateAction<string | null>>;
  setAuthentication: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isAuthenticated, setAuthentication] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ user, password, isAuthenticated, setUser, setPassword, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un proveedor AuthContext");
  }
  return context;
};

export { useAuth, AuthContext, AuthProvider };
