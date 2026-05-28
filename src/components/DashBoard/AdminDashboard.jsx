import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import CreateTask from "../Others/CreateTask";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <EmployeeDashboadHeader employeeName={userData.name} />
      <CreateTask />
      <AllTaskList />
    </>
  );
};

export default AdminDashboard;
