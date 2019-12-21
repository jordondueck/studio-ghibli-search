import React from "react";
import Card2 from "./Card2";
import "./CardList.css"

const CardList2 = ({ category, results }) => {
  return (
    <div>
      <h2>{category}</h2>
    <div className="cardList">
      {results.map(result => {
        return (
          <Card2
            category={category} key={result.id} id={result.id} {...result}
          />
        );
      })}
    </div>
    </div>
  );
};

export default CardList2;
