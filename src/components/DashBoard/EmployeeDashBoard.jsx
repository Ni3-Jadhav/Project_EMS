import React from "react";
import Header from "../Others/Header";
import TaskNumbers from "../Others/TaskNumbers";
import TaskListCards from "../Others/TaskListCards";

const EmployeeDashBoard = ({
  userData,
  setUser,
  setLoggedInUserData,
  headerName,
  headerSubtitle,
  adminPreview = false,
}) => {
  console.log(userData);
  return (
    <>
      <Header
        employeeName={headerName || userData?.name}
        setUser={setUser}
        setLoggedInUserData={setLoggedInUserData}
        subtitleText={headerSubtitle || "Welcome back to your dashboard"}
        adminPreview={adminPreview}
      />
      <TaskNumbers userData={userData} />
      <TaskListCards userData={userData} />
    </>
  );
};

export default EmployeeDashBoard;
