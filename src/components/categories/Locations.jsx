import React from "react";
import "./Category.css"

const Locations = props => {
  return (
    <ul className="card">
      <li><h2>{props.name}</h2></li>
      <li><b>Climate:</b> {props.climate}</li>
      <li><b>Terrain:</b> {props.terrain}</li>
      <li><b>Surface Water:</b> {props.surface_water} km<sup>2</sup></li>
    </ul> 
  );
};

export default Locations;
