import React from "react";
import "./Card.css"

const Card = ({ id, name, handleNav }) => {
  return (
      <div className="card">
        <h3 id={id} onClick={handleNav}>{name}</h3>
      </div>
  );
}

export default Card;
