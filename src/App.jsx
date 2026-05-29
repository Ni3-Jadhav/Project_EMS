import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import LoginEmp from "./components/Auth/LoginEmp";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";
import AdminPreview from "./components/DashBoard/AdminPreview";

const AppContent = () => {
  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (authData && authData.userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);

        setUser(parsedUser.role);

        setLoggedInUserData(parsedUser.data);

        // Auto Redirect
        if (parsedUser.role === "admin") {
          navigate("/admin");
        } else if (parsedUser.role === "employee") {
          navigate("/employee");
        } else {
          navigate("/login");
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    // Admin Login
    const adminUser = authData?.userData?.admin.find(
      (a) => a.email === email && a.password === password,
    );

    if (adminUser) {
      setUser("admin");

      setLoggedInUserData(adminUser);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: adminUser,
        }),
      );

      navigate("/admin");

      return;
    }

    // Employee Login
    const employee = authData?.userData?.employees.find(
      (e) => e.email === email && e.password === password,
    );

    if (employee) {
      setUser("employee");

      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        }),
      );

      navigate("/employee");

      return;
    }

    alert("Invalid credentials");
  };

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/login"
        element={
          !user ? (
            <LoginEmp handleLogin={handleLogin} />
          ) : user === "admin" ? (
            <Navigate to="/admin" />
          ) : (
            <Navigate to="/employee" />
          )
        }
      />

      {/* Employee */}
      <Route
        path="/employee"
        element={
          user === "employee" ? (
            <EmployeeDashBoard
              userData={loggedInUserData}
              setUser={setUser}
              setLoggedInUserData={setLoggedInUserData}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          user === "admin" ? (
            <AdminDashboard
              userData={loggedInUserData}
              setUser={setUser}
              setLoggedInUserData={setLoggedInUserData}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/admin/employee/:employeeId"
        element={
          <AdminPreview
            user={user}
            setUser={setUser}
            setLoggedInUserData={setLoggedInUserData}
          />
        }
      />

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
