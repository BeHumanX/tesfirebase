import React, { createContext, useState,useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get('isAuthenticated') === 'true');
    console.log('Initial isAuthenticated value:', isAuthenticated);


  useEffect(() => {
    const handleAuthenticationChange = () => {
      setIsAuthenticated(Cookies.get('isAuthenticated') === 'true');
    };

    window.addEventListener('storage', handleAuthenticationChange);

    return () => {
      window.removeEventListener('storage', handleAuthenticationChange);
    };
  }, []);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
