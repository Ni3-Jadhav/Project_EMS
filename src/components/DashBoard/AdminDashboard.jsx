import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import CreateTask from "../Others/CreateTask";

const AdminDashboard = () => {
  return (
    <>
      <EmployeeDashboadHeader employeeName="Admin" />
      <CreateTask />
    </>
  );
};

export default AdminDashboard;
