import React from "react";
import Header from "../../components/Header";
import CreateTask from "../../components/CreateTask";
import AllTaskList from "../../components/AllTaskList";

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
