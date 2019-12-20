import React from "react";
import "./categories/Category.css"

// Change to Card
const Card2 = props => {
  const categoryFields = {
    films: [
      { name: 'description', label: 'Description' },
      { name: 'director', label: 'Director' },
      { name: 'producer', label: 'Producer' },
      { name: 'release_date', label: 'Release Date' },
      { name: 'rt_score', label: 'Rotten Tomatoes Score' }
    ],
    locations: [
      { name: 'climate', label: 'Climate' },
      { name: 'terrain', label: 'Terrain' },
      { name: 'surface_water', label: 'Surface Water' }
    ],
    people: [
      { name: 'gender', label: 'Gender' },
      { name: 'age', label: 'Age' },
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
      { name: 'length', label: 'Length' }
    ]
  }

  const selectedCategory = categoryFields[(props.category).toLowerCase()];
  const cardTitle = <li id='-1'><h2>{props.name ? props.name : props.title}</h2></li>;
  const readMore = <a href='#'>(...read more)</a>

  return (
    <ul className="card">
      {/* DEV LOG */}
      {/* {console.log('props' , props)}
      {console.log('selectedCategory' , selectedCategory)} */}
      {cardTitle}
      {selectedCategory.map((value, index) => {
        // return (props[value.name].length < 250) ? (<li id={index}>{value.label}: {props[value.name]}</li>) : (<li id={index}>{value.label}: {props[value.name].slice(0, 250)} {readMore}</li>)
        if (value.name === 'description') {
          if (props[value.name].length < 250) {
            return <li id={index}>{props[value.name]}</li>
          } else {
            return <li id={index}>{props[value.name].slice(0, 250)} {readMore}</li>
          }
        } else {
          return <li id={index}><h7>{value.label}:</h7> {props[value.name]}</li>
        }
      })}
    </ul>
  )
};

export default Card2;