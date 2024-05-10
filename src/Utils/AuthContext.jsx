import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  role: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [role, setRole] = useState(() => {
    const savedRole = localStorage.getItem("rôle");
    return savedRole ? JSON.parse(savedRole) : null;
  });

  const signIn = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", userRole);
  };

  const signOut = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, role, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
