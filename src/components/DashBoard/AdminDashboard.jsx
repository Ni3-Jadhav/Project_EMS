import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTaskList from "../Others/AllTaskList";

const AdminDashboard = ({ userData, setUser, setLoggedInUserData }) => {
  console.log(userData);
  return (
    <>
      <Header employeeName={userData.name} setUser={setUser} setLoggedInUserData={setLoggedInUserData} />
      <CreateTask userData={userData} />
      <AllTaskList userData={userData} />
    </>
  );
};

export default AdminDashboard;
