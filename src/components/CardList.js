import React from "react";
import Card from "./Card";
import "./CardList.css"

const CardList = ({ category }) => {
  return (
    <div className="cardList">
      {category.map((name, i) => {
        return (
          <Card
            key={i}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default CardList;
