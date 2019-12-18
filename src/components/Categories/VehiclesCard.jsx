import React from "react";
import "./Card.css"

const VehiclesCard = props => {
  return (
    <ul className="card">
      <li><h2>{props.name}</h2></li>
      <li><b>Description:</b> {props.description}</li>
      <li><b>Class:</b> {props.vehicle_class}</li>
      <li><b>Length:</b> {props.length} m</li>
    </ul>
  );
};

export default VehiclesCard;
