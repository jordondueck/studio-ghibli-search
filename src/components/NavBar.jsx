import React from "react";
import homeButton from "../images/home-24px.svg";
import "./NavBar.css";

const NavBar = ({ category, selectedCategoryIndex, handleNav, handleHome }) => {
  if (selectedCategoryIndex === -1) {
    return (
      <nav>
        <h3 className="nav-title" onClick={handleHome}>Studio Ghibli Search</h3>
      </nav>
    );
  } else {
    return (
      <nav>
        <h3 className="nav-title" onClick={handleHome}>Studio Ghibli Search</h3>
        <ul className="nav-links">
          <li className="home-link" onClick={handleHome}>
            <img src={homeButton} alt="Home"></img>
          </li>
          {/* {category.map((name, i) => {
            // return <li className="nav-item" key={i} value={category[i]} onClick={handleNav}><a href="#">{name}</a></li>;
            return <li key={i} id={i} onClick={handleNav}>{name}</li>;
          })} */}
        </ul>
      </nav>
    );
  }
};

export default NavBar;
