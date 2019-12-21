import React from "react";
import DashboardItem from "./DashboardItem";
import "./Dashboard.css";

const Dashboard = ({ category, handleNav }) => {
  return (
    <div>
      <h3>Select a category</h3>

    <div className="dashboard">
      {category.map((name, i) => {
        return (
          <DashboardItem key={i} id={i} name={name} handleNav={handleNav} />
          );
        })}
    </div>
        </div>
  );
};

export default Dashboard;
