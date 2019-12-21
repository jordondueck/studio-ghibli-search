import React from "react";
import tomato from "../../images/tomato.png";
import "./Card.css";
import "./CardList.css";

class CardExpanded extends React.Component {
  render() {
    const selectedCategory = this.props.categoryFields[this.props.category];
    const cardTitle = (
      <li key="-1" id="-1">
        <h2>
          {this.props.results.name
            ? this.props.results.name
            : this.props.results.title}
        </h2>
      </li>
    );

    const clickToExpand = (
      <button className="clickToExpand">Click to return</button>
    );

    return (
      <div className="cardBg">
        <ul className="card-expanded" onClick={this.props.expandCard}>
          {cardTitle}
          {selectedCategory.map((value, index) => {
            if (value.name === "description") {
              return <li key={index} id={index}>{this.props.results[value.name]}</li>;
            } else if (value.unit) {
              // If the value has a unit (set as state variable)
              if (
                value.name === "age" &&
                isNaN(this.props.results[value.name])
              ) {
                // Special Case - do not use the unit (years) when age is empty or N/A
                return (
                  <li key={index} id={index}>
                    <h5>{value.label}:</h5> {this.props.results[value.name]}
                  </li>
                );
              } else if (value.name === "rt_score") {
                // Special Case - add "rotten tomato" graphic as the unit
                const rottenTomatoes = (
                  <img
                    className="rotten-tomato"
                    src={tomato}
                    alt="rotten tomato"
                  ></img>
                );
                return (
                  <li key={index} id={index}>
                    <h5>{value.label}:</h5> {this.props.results[value.name]}{" "}
                    {rottenTomatoes}
                  </li>
                );
              } else if (value.name === "surface_water") {
                // Special Case - only use km^2 when surface water is greater than 0
                if (this.props.results[value.name] > 0) {
                  return (
                    <li key={index} id={index}>
                      <h5>{value.label}:</h5> {this.props.results[value.name]}{" "}
                      {value.unit}
                      <sup>2</sup>
                    </li>
                  );
                } else if (this.props.results[value.name] === 0) {
                  return (
                    <li key={index} id={index}>
                      <h5>{value.label}:</h5> None
                    </li>
                  );
                }
              } else {
                // Default Case - append the unit to the value (if unit is set)
                return (
                  <li key={index} id={index}>
                    <h5>{value.label}:</h5> {this.props.results[value.name]}{" "}
                    {value.unit}
                  </li>
                );
              }
            } else {
              // If the value does not have a unit (set as a state variable)
              return (
                <li key={index} id={index}>
                  <h5>{value.label}:</h5> {this.props.results[value.name]}
                </li>
              );
            }
            return (
              <li key={index} id={index}>
                <h5>{value.label}:</h5> {this.props.results[value.name]}
              </li>
            );
          })}
          <li className="buttonContainer">{clickToExpand}</li>
        </ul>
      </div>
    );
  }
}

export default CardExpanded;
