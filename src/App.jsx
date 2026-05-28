import React from "react";
import LoginEmp from "./components/Auth/LoginEmp";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    if (authData && authData.userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        setLoggedInUserData(parsedUser.data);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.userData &&
      authData.userData.admin.find(
        (a) => a.email === email && a.password === password,
      )
    ) {
      const adminUser = authData.userData.admin.find(
        (a) => a.email === email && a.password === password,
      );
      setUser("admin");
      setLoggedInUserData(adminUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminUser }),
      );
    } else if (
      authData &&
      authData.userData &&
      authData.userData.employees.find(
        (e) => e.email === email && e.password === password,
      )
    ) {
      const employee = authData.userData.employees.find(
        (e) => e.email === email && e.password === password,
      );
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {user ? "" : <LoginEmp handleLogin={handleLogin} />}
      {user === "employee" && <EmployeeDashBoard userData={loggedInUserData} />}
      {user === "admin" && <AdminDashboard userData={loggedInUserData} />}
    </>
  );
};

export default App;
