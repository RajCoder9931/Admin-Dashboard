import React, { useState, createContext, useContext } from 'react';
type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
};
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin'
  });
  const login = async (email: string, password: string) => {
    // Mock login functionality
    setUser({
      id: '1',
      name: 'Admin User',
      email,
      role: 'admin'
    });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};