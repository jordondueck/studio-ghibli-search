import React, { useState } from "react";
import tomato from "../../images/tomato.png";
import CardExpanded from "./CardExpanded";
import "./Card.css";

const Card = props => {
  const categoryFields = {
    films: [
      { name: "description", label: "Description" },
      { name: "director", label: "Director" },
      { name: "producer", label: "Producer" },
      { name: "release_date", label: "Release Date" },
      { name: "rt_score", label: "Rotten Tomatoes Score", unit: "out of 100" }
    ],
    locations: [
      { name: "climate", label: "Climate" },
      { name: "terrain", label: "Terrain" },
      { name: "surface_water", label: "Surface Water", unit: "km" }
    ],
    people: [
      { name: "gender", label: "Gender" },
      { name: "age", label: "Age", unit: "years" },
      { name: "eye_color", label: "Eye Color" },
      { name: "hair_color", label: "Hair color" }
    ],
    species: [
      { name: "eye_colors", label: "Eye Colors" },
      { name: "hair_colors", label: "Hair Colors" }
    ],
    vehicles: [
      { name: "description", label: "Description" },
      { name: "vehicle_class", label: "Vehicle Class" },
      { name: "length", label: "Length", unit: "m" }
    ]
  };

  const [cardExpanded, setCardExpanded] = useState(false);

  const toggleCard = event => {
    setCardExpanded(!cardExpanded);
  };

  const selectedCategory = categoryFields[props.category.toLowerCase()];
  const cardTitle = (
    <li className="card--title" key="-1" id="-1">
      <h3>{props.name ? props.name : props.title}</h3>
    </li>
  );
  // const readMore = <button className="read-more">(read more)</button>
  const readMore2 = "...";
  const clickToExpand = <button className="card--button">View</button>;

  if (!cardExpanded) {
    return (
      <ul className="card" onClick={toggleCard}>
        {cardTitle}
        {selectedCategory.map((value, index) => {
          if (value.name === "description") {
            if (props[value.name].length < 250) {
              return (
                <li className="card--content" key={index} id={index}>
                  {props[value.name]}
                </li>
              );
            } else {
              return (
                <li className="card--content" key={index} id={index}>
                  {props[value.name].slice(0, 250)}
                  {readMore2}
                </li>
              );
            }
          } else if (value.unit) {
            // If the value has a unit (set as state variable)
            if (value.name === "age" && isNaN(props[value.name])) {
              // Special Case - do not use the unit (years) when age is empty or N/A
              return (
                <li className="card--content" key={index} id={index}>
                  <h5 className="card--label">{value.label}:</h5>{" "}
                  {props[value.name]}
                </li>
              );
            } else if (value.name === "rt_score") {
              // Special Case - add "rotten tomato" graphic as the unit
              const rottenTomatoes = (
                <img
                  className="rotten-tomato"
                  src={tomato}
                  alt="rotten tomato"
                ></img>
              );
              return (
                <li className="card--content" key={index} id={index}>
                  <h5 className="card--label">{value.label}:</h5>{" "}
                  {props[value.name]} {rottenTomatoes}
                </li>
              );
            } else if (value.name === "surface_water") {
              // Special Case - append ^2 (superscript) to the unit
              return (
                <li className="card--content" key={index} id={index}>
                  <h5 className="card--label">{value.label}:</h5>{" "}
                  {props[value.name]} {value.unit}
                  <sup>2</sup>
                </li>
              );
            } else {
              // Default Case - append the unit to the value (if unit is set)
              return (
                <li className="card--content" key={index} id={index}>
                  <h5 className="card--label">{value.label}:</h5>{" "}
                  {props[value.name]} {value.unit}
                </li>
              );
            }
          } else {
            // If the value does not have a unit (set as a state variable)
            return (
              <li className="card--content" key={index} id={index}>
                <h5 className="card--label">{value.label}:</h5>{" "}
                {props[value.name]}
              </li>
            );
          }
        })}
        <li className="card--button--container">{clickToExpand}</li>
      </ul>
    );
  } else {
    return (
      <CardExpanded
        id={props.id}
        category={props.category.toLowerCase()}
        results={props}
        categoryFields={categoryFields}
        toggleCard={toggleCard}
      />
    );
  }
};

export default Card;
