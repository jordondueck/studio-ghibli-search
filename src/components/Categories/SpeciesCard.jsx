import React from "react";
import "./Card.css"

const SpeciesCard = props => {
  return (
    <ul className="card">
      <li><h2>{props.name}</h2></li>
      <li><b>Classification:</b> {props.classification}</li>
      <li><b>Eye Colour:</b> {props.eye_colors}</li>
      <li><b>Hair Colour:</b> {props.hair_colors}</li>
    </ul>
  );
};

export default SpeciesCard;
