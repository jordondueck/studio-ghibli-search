import React from "react";
import "./Card.css"

const FilmsCard = props => {
  return (
    // <div className="card">
    //   <h2>{props.name}</h2>
    //   <p><b>Description:</b> {props.description}</p>
    //   <p><b>Class:</b> {props.vehicle_class}</p>
    //   <p><b>Length:</b> {props.length} m</p>

      <div className="card">
        <b>Title:</b> {props.title}
        <b>Description:</b> {props.description}
        <b>Director:</b> {props.director}
        <b>Producer:</b> {props.producer}
        <b>Release Date:</b> {props.release_date}
        <b>Rotten Tomatoes Score:</b> {props.rt_score} out of 100
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

export default FilmsCard;
