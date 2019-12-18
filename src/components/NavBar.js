import React from "react";
import "./NavBar.css";

const NavBar = ({ category, handleNav }) => {
  return (
    <nav>
      <div className="nav-title">
        <h3>Studio Ghibli Search</h3>
      </div>
      <ul className="nav-links">
        {category.map((name, i) => {
          // return <li className="nav-item" key={i} value={category[i]} onClick={handleNav}><a href="#">{name}</a></li>;
          return <li key={i} id={i} onClick={handleNav}>{name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
