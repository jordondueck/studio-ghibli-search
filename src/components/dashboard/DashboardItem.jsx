import React from "react";
import "./DashboardItem.css";

const DashboardItem = ({ id, name, handleNav }) => {
  return (
    <div className="dashboard--item">
      <h3 id={id} onClick={handleNav}>
        {name}
      </h3>
    </div>
  );
};

export default DashboardItem;
