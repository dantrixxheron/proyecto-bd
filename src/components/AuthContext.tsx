<<<<<<< HEAD
=======
// AuthContext.tsx
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: string | null;
<<<<<<< HEAD
  password: string | null;
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<string | null>>;
  setPassword: Dispatch<SetStateAction<string | null>>;
=======
  password: string | null; // Nuevo estado para la contraseña
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<string | null>>;
  setPassword: Dispatch<SetStateAction<string | null>>; // Nueva función para establecer la contraseña
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
  setAuthentication: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
<<<<<<< HEAD
  const [password, setPassword] = useState<string | null>(null);
=======
  const [password, setPassword] = useState<string | null>(null); // Nuevo estado para la contraseña
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
  const [isAuthenticated, setAuthentication] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ user, password, isAuthenticated, setUser, setPassword, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
const useAuth = (): AuthContextType => {
=======
const useAuth = () => {
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un proveedor AuthContext");
  }
  return context;
};

export { useAuth, AuthContext, AuthProvider };
