// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { FIREBASE_AUTH } from '../../firebase';


export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password); // Implement auth methods
  };

  //const login = (email, password) => signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, googleProvider); // Implement auth methods
  };

  const logout = () => signOut(FIREBASE_AUTH);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}