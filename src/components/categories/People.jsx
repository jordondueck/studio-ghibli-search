import React from "react";
import "./Category.css"

const People = props => {
  return (
    <ul className="card">
      <li><h2>{props.name}</h2></li>
      <li><b>Gender:</b> {props.gender}</li>
      <li><b>Age:</b> {props.age} years</li>
      <li><b>Eye Colour:</b> {props.eye_color}</li>
      <li><b>Hair Colour:</b> {props.hair_color}</li>
    </ul>
  );
};

export default People;
