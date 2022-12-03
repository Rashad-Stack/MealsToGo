import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { app } from "../../firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        signOut(auth);
        setUsers(null);
      }
    });
  }, []);

  const login = (email, password) => {
    if (!email && !password) {
      return;
    }
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        setUsers(user);
        setIsLoading(false);
        // ...
      })
      .catch((err) => {
        setError({ errorMessage: err.code });
        setIsLoading(false);
      });
  };

  const register = (email, password, confirmPassword) => {
    if (!email && !password) {
      return;
    } else if (password !== confirmPassword) {
      setError({ errorMessage: "Password does not match" });
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUsers(user);
        setIsLoading(false);
        // ...
      })
      .catch((err) => {
        setError({ errorMessage: err.code });
        setIsLoading(false);
        // ..
      });
  };

  const logout = () => {
    setIsLoading(true);
    signOut(auth);
    setUsers(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        register,
        login,
        logout,
        users,
        isLoading,
        setError,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
