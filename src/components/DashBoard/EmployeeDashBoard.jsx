import React from "react";
import Header from "../Others/Header";
import TaskNumbers from "../Others/TaskNumbers";
import TaskListCards from "../Others/TaskListCards";

const EmployeeDashBoard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <Header employeeName={userData.name} />
      <TaskNumbers userData={userData} />
      <TaskListCards userData={userData} />
    </>
  );
};

export default EmployeeDashBoard;
