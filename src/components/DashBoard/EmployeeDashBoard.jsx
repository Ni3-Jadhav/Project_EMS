import React from "react";
import Header from "../Others/Header";
import TaskNumbers from "../Others/TaskNumbers";
import TaskListCards from "../Others/TaskListCards";

const EmployeeDashBoard = ({ userData, setUser, setLoggedInUserData }) => {
  console.log(userData);
  return (
    <>
      <Header employeeName={userData.name} setUser={setUser} setLoggedInUserData={setLoggedInUserData} />
      <TaskNumbers userData={userData} />
      <TaskListCards userData={userData} />
    </>
  );
};

export default EmployeeDashBoard;
