import React from "react";
import "./Card.css"

const PeopleCard = props => {
  return (
    <div className="card">
      {/* <h2>{props.name}</h2>
      <p><b>Classification:</b> {props.classification}</p>
      <p><b>Eye Colour:</b> {props.eye_colors}</p>
      <p><b>Hair Colour:</b> {props.hair_colors}</p> */}

<li>
        <b>Name:</b> {props.name}
        <br />
        <b>Gender:</b> {props.gender}
        <br />
        <b>Age:</b> {props.age} years
        <br />
        <b>Eye Colour:</b> {props.eye_color}
        <br />
        <b>Hair Colour:</b> {props.hair_color}
        <br />
      </li>
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

export default PeopleCard;
