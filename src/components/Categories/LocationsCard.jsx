import React from "react";
import "./Card.css"

const LocationsCard = props => {
  return (
    // <div className="card">
    //   <h2>{props.name}</h2>
    //   <p><b>Description:</b> {props.description}</p>
    //   <p><b>Class:</b> {props.vehicle_class}</p>
    //   <p><b>Length:</b> {props.length} m</p>

      <div className="card">
        <b>Name:</b> {props.name}
        <br />
        <b>Climate:</b> {props.climate}
        <br />
        <b>Terrain:</b> {props.terrain}
        <br />
        <b>Surface Water:</b> {props.surface_water} km<sup>2</sup>
        <br />
      </div> 


    // <div style={siteStyle}>
    //   <li>
    //     <b>Name:</b> {props.name}
    //     <br />
    //     <b>Description:</b> {props.description}
    //     <br />
    //     <b>Class:</b> {props.vehicle_class}
    //     <br />
    //     <b>Length:</b> {props.length} m
    //     <br />
    //   </li>
    // </div>
  );
};

export default LocationsCard;
