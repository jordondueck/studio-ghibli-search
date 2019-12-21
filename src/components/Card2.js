import React, { useState } from "react";
import "./categories/Category.css"
import tomato from "../images/tomato-576798.svg";
import CardExpanded from "./CardExpanded"

// Change to Card
const Card2 = props => {
  const categoryFields = {
    films: [
      { name: 'description', label: 'Description' },
      { name: 'director', label: 'Director' },
      { name: 'producer', label: 'Producer' },
      { name: 'release_date', label: 'Release Date' },
      { name: 'rt_score', label: 'Rotten Tomatoes Score', unit: 'out of 100' }
    ],
    locations: [
      { name: 'climate', label: 'Climate' },
      { name: 'terrain', label: 'Terrain' },
      { name: 'surface_water', label: 'Surface Water', unit: 'km' }
    ],
    people: [
      { name: 'gender', label: 'Gender' },
      { name: 'age', label: 'Age', unit: 'years' },
      { name: 'eye_color', label: 'Eye Color' },
      { name: 'hair_color', label: 'Hair color' }
    ],
    species: [
      { name: 'eye_colors', label: 'Eye Colors' },
      { name: 'hair_colors', label: 'Hair Colors' }
    ],
    vehicles: [
      { name: 'description', label: 'Description' },
      { name: 'vehicle_class', label: 'Vehicle Class' },
      { name: 'length', label: 'Length', unit: 'm' }
    ]
  }

  // let cardExpanded = false;
  const [cardExpanded, setCardExpanded] = useState(false);

  const expandCard = event => {
    console.log('props.id' , props.id);
    console.log('cardExpanded-Before' , cardExpanded);
    console.log('cardExpanded-Before-SetTo' , !cardExpanded);
    setCardExpanded(!cardExpanded)
    console.log('cardExpanded-After' , cardExpanded);
  }

  const selectedCategory = categoryFields[(props.category).toLowerCase()];
  const cardTitle = <li key='-1' id='-1'><h2>{props.name ? props.name : props.title}</h2></li>;
  const readMore = <a href='#'>(read more)</a>

  if(!cardExpanded) {
  return (
    <ul className="card" onClick={expandCard}>
      {console.log('props (Card2)' , props)}
      {/* {console.log('selectedCategory' , selectedCategory)} */}
      {cardTitle}
      {selectedCategory.map((value, index) => {
        // return (props[value.name].length < 250) ? (<li id={index}>{value.label}: {props[value.name]}</li>) : (<li id={index}>{value.label}: {props[value.name].slice(0, 250)} {readMore}</li>)
        if (value.name === 'description') {
          if (props[value.name].length < 250) {
            return <li key={index} id={index}>{props[value.name]}</li>
          } else {
            return <li key={index} id={index}>{props[value.name].slice(0, 250)} {readMore}</li>
          }
        } else if (value.unit) { // If the value has a unit (set as state variable)
          if (value.name === 'age' && isNaN(props[value.name])) { // Special Case - do not use the unit (years) when age is empty or N/A
            return <li key={index} id={index}><h7>{value.label}:</h7> {props[value.name]}</li>
          } else if (value.name === 'rt_score') { // Special Case - add "rotten tomato" graphic as the unit
            const rottenTomatoes = <img className="rotten-tomato" src={tomato} alt='rotten tomato'></img>;
            return <li key={index} id={index}><h7>{value.label}:</h7> {props[value.name]} {rottenTomatoes}</li>
          } else if (value.name === 'surface_water') { // Special Case - only use km^2 when surface water is greater than 0
            if (props[value.name] > 0) {
              return <li key={index} id={index}><h7>{value.label}:</h7> {props[value.name]} {value.unit}<sup>2</sup></li>
            } else if (props[value.name] === 0) {
              return <li key={index} id={index}><h7>{value.label}:</h7> None</li>
            }
          } else {  // Default Case - append the unit to the value (if unit is set)
            return <li key={index} id={index}><h7>{value.label}:</h7> {props[value.name]} {value.unit}</li>
          }
        } else {  // If the value does not have a unit (set as a state variable)
          return <li key={index} id={index}><h7>{value.label}:</h7> {props[value.name]}</li>
        }
      })}
    </ul>
      )
    } else {
      return <CardExpanded id={props.id} category={(props.category).toLowerCase()} categoryFields={categoryFields} expandCard={expandCard} />
    }
};

export default Card2;