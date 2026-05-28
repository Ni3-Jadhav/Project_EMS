import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import TaskNumbers from "../Others/TaskNumbers";
import TaskListCards from "../Others/TaskListCards";

const EmployeeDashBoard = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <EmployeeDashboadHeader employeeName={userData.name} />
      <TaskNumbers userData={userData} />
      <TaskListCards userData={userData} />
    </>
  );
};

export default EmployeeDashBoard;
