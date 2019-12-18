import React from "react";
import "./Card.css"

const FilmsCard = props => {
  return (
    <ul className="card">
      <li><h2>{props.title}</h2></li>
      <li><b>Description:</b> {props.description}</li>
      <li><b>Director:</b> {props.director}</li>
      <li><b>Producer:</b> {props.producer}</li>
      <li><b>Release Date:</b> {props.release_date}</li>
      <li><b>Rotten Tomatoes Score:</b> {props.rt_score} out of 100</li>
    </ul> 
  );
};

export default FilmsCard;
