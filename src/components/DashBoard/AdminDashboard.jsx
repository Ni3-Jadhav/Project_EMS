import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <Header employeeName={userData.name} />
      <CreateTask userData={userData} />
      <AllTaskList userData={userData} />
    </>
  );
};

export default AdminDashboard;
