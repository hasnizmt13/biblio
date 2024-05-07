import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({ user: null, signIn: () => {}, signOut: () => {} });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    

    const signIn = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user'); 
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
