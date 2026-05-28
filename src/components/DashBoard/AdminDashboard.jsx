import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import CreateTask from "../Others/CreateTask";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <EmployeeDashboadHeader employeeName={userData.name} />
      <CreateTask userData={userData} />
      <AllTaskList userData={userData} />
    </>
  );
};

export default AdminDashboard;
