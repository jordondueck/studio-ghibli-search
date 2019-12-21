import React from "react";
import "./categories/Category.css"
import tomato from "../images/tomato-576798.svg";
import "./CardList.css"

// Change to Card
class CardExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/" + this.props.category + "/" + this.props.id)
      .then(response => this.handleHTTPErrors(response))
      .then(response => response.json())
      .then(result => {
        this.setState({
          results: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }
  
  render() {
    console.log('this.props(Card Expanded)' , this.props);
    console.log('this.state.results' , this.state.results);
    console.log('URL used: ' , "https://ghibliapi.herokuapp.com/" + this.props.category + "/" + this.props.id);

    const selectedCategory = this.props.categoryFields[this.props.category];
    const cardTitle = <li id='-1'><h2>{this.state.results.name ? this.state.results.name : this.state.results.title}</h2></li>;

  return (
    <div className="cardBg">

    <ul className="card-expanded" onClick={this.props.expandCard}>
      {cardTitle}
      {selectedCategory.map((value, index) => {
        console.log('value' , value)
        console.log('this.state.results[value.name]' , this.state.results[value.name])
        if (value.name === 'description') {
          return <li id={index}>{this.state.results[value.name]}</li>
        
        } else if (value.unit) { // If the value has a unit (set as state variable)
          if (value.name === 'age' && isNaN(this.state.results[value.name])) { // Special Case - do not use the unit (years) when age is empty or N/A
            return <li id={index}><h7>{value.label}:</h7> {this.state.results[value.name]}</li>
          } else if (value.name === 'rt_score') { // Special Case - add "rotten tomato" graphic as the unit
            const rottenTomatoes = <img className="rotten-tomato" src={tomato} alt='rotten tomato'></img>;
            return <li id={index}><h7>{value.label}:</h7> {this.state.results[value.name]} {rottenTomatoes}</li>
          } else if (value.name === 'surface_water') { // Special Case - only use km^2 when surface water is greater than 0
            if (this.state.results[value.name] > 0) {
              return <li id={index}><h7>{value.label}:</h7> {this.state.results[value.name]} {value.unit}<sup>2</sup></li>
            } else if (this.state.results[value.name] === 0) {
              return <li id={index}><h7>{value.label}:</h7> None</li>
            }
          } else {  // Default Case - append the unit to the value (if unit is set)
            return <li id={index}><h7>{value.label}:</h7> {this.state.results[value.name]} {value.unit}</li>
          }
        } else {  // If the value does not have a unit (set as a state variable)
          return <li id={index}><h7>{value.label}:</h7> {this.state.results[value.name]}</li>
        }
        console.log('value' , value);
        console.log('index' , index);
      })}
    </ul>
    </div>
  );
    }
};

export default CardExpanded;