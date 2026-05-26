import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import CreateTask from "../Others/CreateTask";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = () => {
  return (
    <>
      <EmployeeDashboadHeader employeeName="Admin" />
      <CreateTask />
      <AllTaskList />
    </>
  );
};

export default AdminDashboard;
