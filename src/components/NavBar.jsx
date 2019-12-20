import React from "react";
import "./NavBar.css";
import homeButton from "../images/home-24px.svg";

const NavBar = ({ category, handleNav, handleHome }) => {
  return (
    <nav>
      <div className="nav-title">
        <h3 onClick={handleHome}>Studio Ghibli Search</h3>
      </div>
      <ul className="nav-links">
      {/* <li key='-1' id='-1' onClick={handleHome}><b>Home</b></li> */}
      <li className="home-link" onClick={handleHome}><img src={homeButton} alt='Home'></img></li>
        {/* {category.map((name, i) => {
          // return <li className="nav-item" key={i} value={category[i]} onClick={handleNav}><a href="#">{name}</a></li>;
          return <li key={i} id={i} onClick={handleNav}>{name}</li>;
        })} */}
        {/* <li key={-1} id={-1} onClick={handleHome}>Home</li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
