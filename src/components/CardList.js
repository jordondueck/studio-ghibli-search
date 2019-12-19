import React from "react";
import Card from "./Card";
import "./CardList.css"

const CardList = ({ category, handleNav }) => {
  return (
    <div className="cardList">
      {category.map((name, i) => {
        return (
          <Card
            key={i}
            id={i}
            name={name}
            handleNav={handleNav}
          />
        );
      })}
    </div>
  );
};

export default CardList;
