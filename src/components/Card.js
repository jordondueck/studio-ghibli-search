import React from "react";
import "./Card.css"

const Card = ({ id, name, handleNav }) => {
  return (
      <div className="card">
        <h2 id={id} onClick={handleNav}>{name}</h2>
      </div>
  );
}

export default Card;
