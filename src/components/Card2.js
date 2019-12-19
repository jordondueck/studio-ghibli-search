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

  // const displayFields = () => {
  //   console.log('props' , props);
  //   console.log('props.category.toLowerCase()' , (props.category).toLowerCase());
  //   const selectedCategory = categoryFields[(props.category).toLowerCase()];
  //   selectedCategory.map((value, index) => {
  //     console.log('value' , value);
  //     console.log('index' , index);
  //     return (<li>hi</li>)
  //   })
  // }

  // Category title, not card title
  // const pageTitle = props.category[0].toUpperCase() + props.category.slice(1).toLowerCase();
  const selectedCategory = categoryFields[(props.category).toLowerCase()];

  return (
    <ul className="card">
<li id='-1'><h2>{props.name}</h2></li>
      {console.log('props' , props)}
      {selectedCategory.map((value, index) => {
      console.log('value' , value);
      console.log('index' , index);
      return (<li id={index}>{value.label}: {props[value.name]}</li>)
    })}
    </ul>
  )

  // console.log('props' , props);
  // let results = Object.values(props);
  // let description = results[2];
  // let readMore = null;

  // if (description.length >= 250) {
  //   description = description.slice(0, 250);
  //   readMore = <a href='#'>(...read more)</a>
  // }
  
  // return (
  //   <ul className="card">
  //     <li><h2>{props.title}</h2></li>
  //     <li><b>Description:</b> {description} {readMore}</li>
  //     <li><b>Director:</b> {props.director}</li>
  //     <li><b>Producer:</b> {props.producer}</li>
  //     <li><b>Release Date:</b> {props.release_date}</li>
  //     <li><b>Rotten Tomatoes Score:</b> {props.rt_score} out of 100</li>
  //   </ul> 
  // );
};

export default Card2;






// import React from "react";
// import Card from "./Card";
// import "./CardList.css"

// const MainMenu = ({ category, handleMenu }) => {
//   return (
//     <div className="cardList">
//       {category.map((name, i) => {
//         return (
//           <Card
//             key={i}
//             id={i}
//             name={name}
//             handleMenu={handleMenu}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default MainMenu;
