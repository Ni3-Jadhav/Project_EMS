import React from "react";
import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ userData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
