import React from "react";
import "./NavBar.css";

const NavBar2 = ({ category, handleNav, handleHome }) => {
  return (
    <nav>
      <div className="nav-title">
        <h3 onClick={handleHome}>Studio Ghibli Search</h3>
      </div>
      <ul className="nav-links">
        {/* {category.map((name, i) => {
          // return <li className="nav-item" key={i} value={category[i]} onClick={handleNav}><a href="#">{name}</a></li>;
          return <li key={i} id={i} onClick={handleNav}>{name}</li>;
        })} */}
        {/* <li key={-1} id={-1} onClick={handleHome}>Home</li> */}
      </ul>
    </nav>
  );
};

export default NavBar2;
