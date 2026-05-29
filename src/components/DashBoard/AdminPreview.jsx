import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EmployeeDashBoard from "./EmployeeDashBoard";

const AdminPreview = ({ user, setUser, setLoggedInUserData }) => {
  const { employeeId } = useParams();
  const location = useLocation();
  const authData = useContext(AuthContext);

  const previewEmployee =
    location.state?.employeeData ||
    authData?.userData?.employees.find(
      (emp) => String(emp.id) === String(employeeId),
    );

  const adminSession = JSON.parse(
    localStorage.getItem("loggedInUser") || "null",
  );

  if (!user || user !== "admin") {
    return <Navigate to="/login" replace />;
  }

  if (!previewEmployee) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <EmployeeDashBoard
      userData={previewEmployee}
      setUser={setUser}
      adminPreview={true}
      setLoggedInUserData={setLoggedInUserData}
      headerName={adminSession?.data?.name || "Admin"}
      headerSubtitle="Admin preview of employee dashboard"
    />
  );
};

export default AdminPreview;
