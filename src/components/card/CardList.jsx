import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ category, results }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="cardList">
        {results.map(result => {
          return (
            <Card
              category={category}
              key={result.id}
              id={result.id}
              {...result}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
