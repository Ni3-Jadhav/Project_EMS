import React from "react";
import EmployeeDashboadHeader from "../Others/EmployeeDashboadHeader";
import TaskNumbers from "../Others/TaskNumbers";
import TaskListCards from "../Others/TaskListCards";

const EmployeeDashBoard = () => {
  return (
    <>
      <EmployeeDashboadHeader employeeName="TusharKumar" />
      <TaskNumbers />
      <TaskListCards />
    </>
  );
};

export default EmployeeDashBoard;
