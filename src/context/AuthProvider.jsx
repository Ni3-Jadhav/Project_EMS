import React from "react";
import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const refreshUserData = () => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  };

  return (
    <>
      <AuthContext.Provider value={{ userData, refreshUserData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
