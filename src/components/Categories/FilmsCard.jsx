import React from "react";
import "./Card.css"

const FilmsCard = props => {
  // console.log('props' , props);
  let results = Object.values(props);
  let description = results[2];
  let readMore = null;

  if (description.length >= 250) {
    description = description.slice(0, 250);
    readMore = <a href='#'>(...read more)</a>
  }
  
  return (
    <ul className="card">
      <li><h2>{props.title}</h2></li>
      <li><b>Description:</b> {description} {readMore}</li>
      <li><b>Director:</b> {props.director}</li>
      <li><b>Producer:</b> {props.producer}</li>
      <li><b>Release Date:</b> {props.release_date}</li>
      <li><b>Rotten Tomatoes Score:</b> {props.rt_score} out of 100</li>
    </ul> 
  );
};

export default FilmsCard;
