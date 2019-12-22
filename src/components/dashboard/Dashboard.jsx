import React from "react";
import DashboardItem from "./DashboardItem";
import "./Dashboard.css";

const Dashboard = ({ category, handleNav }) => {
  return (
    <section className="dashboard">
      <h3 className="dashboard-title">Select a category</h3>
      <section className="dashboard-menu">
        {category.map((name, i) => {
          return (
            <DashboardItem key={i} id={i} name={name} handleNav={handleNav} />
          );
        })}
      </section>
    </section>
  );
};

export default Dashboard;
