import React from "react";
import tomato from "../../images/tomato.png";
import "./Card.css";
import "./CardExpanded.css";

class CardExpanded extends React.Component {
  render() {
    const selectedCategory = this.props.categoryFields[this.props.category];
    const cardTitle = (
      <li className="card--title" key="-1" id="-1">
        <h2>
          {this.props.results.name
            ? this.props.results.name
            : this.props.results.title}
        </h2>
      </li>
    );

    const clickToReturn = <button className="card--button">Return</button>;

    return (
      <div className="card-expanded--bg">
        <ul className="card-expanded" onClick={this.props.toggleCard}>
          {cardTitle}
          {selectedCategory.map((value, index) => {
            if (value.name === "description") {
              return (
                <li className="card--content" key={index} id={index}>
                  {this.props.results[value.name]}
                </li>
              );
            } else if (value.unit) {
              // If the value has a unit (set as state variable)
              if (
                value.name === "age" &&
                isNaN(this.props.results[value.name])
              ) {
                // Special Case - do not use the unit (years) when age is empty or N/A
                return (
                  <li className="card--content" key={index} id={index}>
                    <h5 className="card--label">{value.label}:</h5>{" "}
                    {this.props.results[value.name]}
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
                  <li className="card--content" key={index} id={index}>
                    <h5 className="card--label">{value.label}:</h5>{" "}
                    {this.props.results[value.name]} {rottenTomatoes}
                  </li>
                );
              } else if (value.name === "surface_water") {
                // Special Case - append ^2 (superscript) to the unit
                return (
                  <li className="card--content" key={index} id={index}>
                    <h5 className="card--label">{value.label}:</h5>{" "}
                    {this.props.results[value.name]} {value.unit}
                    <sup>2</sup>
                  </li>
                );
              } else {
                // Default Case - append the unit to the value (if unit is set)
                return (
                  <li className="card--content" key={index} id={index}>
                    <h5 className="card--label">{value.label}:</h5>{" "}
                    {this.props.results[value.name]} {value.unit}
                  </li>
                );
              }
            } else {
              // If the value does not have a unit (set as a state variable)
              return (
                <li className="card--content" key={index} id={index}>
                  <h5 className="card--label">{value.label}:</h5>{" "}
                  {this.props.results[value.name]}
                </li>
              );
            }
          })}
          <li className="card--button--container">{clickToReturn}</li>
        </ul>
      </div>
    );
  }
}

export default CardExpanded;
