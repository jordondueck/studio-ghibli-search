import React from "react";
import DashboardItem from "./DashboardItem";
import "./Dashboard.css";

const Dashboard = ({ category, handleNav }) => {
  return (
    <div className="cardList">
      {category.map((name, i) => {
        return (
          <DashboardItem key={i} id={i} name={name} handleNav={handleNav} />
        );
      })}
    </div>
  );
};

export default Dashboard;
