import React from "react";
import DashLayout from "../utils/dash_layout";

const Dashboard = (props) => {
  return (
    <DashLayout auth={props.auth} title="Dashboard">
      Dashboard
    </DashLayout>
  );
};

export default Dashboard;
