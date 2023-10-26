// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { FIREBASE_AUTH } from '../../firebase';

const auth = FIREBASE_AUTH;

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password); // Implement auth methods
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider); // Implement auth methods
  };


  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
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