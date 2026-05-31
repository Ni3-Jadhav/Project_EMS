import React from "react";
import Header from "../../components/Header";
import TaskNumbers from "../../components/TaskNumbers";
import TaskListCards from "../../components/TaskListCards";

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
