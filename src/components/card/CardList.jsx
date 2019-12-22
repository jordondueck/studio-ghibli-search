import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ category, results }) => {
  return (
    <section className="card-list">
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
    </section>
  );
};

export default CardList;
