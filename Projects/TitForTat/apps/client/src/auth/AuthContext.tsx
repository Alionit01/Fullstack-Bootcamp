import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';


type User = { name: string; email: string } | null;

interface AuthContextType {
  user: User;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('authToken'));

  function login(user: User, token: string) {
    setUser(user);
    setToken(token);
    localStorage.setItem('authToken', token);
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}