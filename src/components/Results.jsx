import React, { Component } from "react";
import Films from "./categories/Films";
import Locations from "./categories/Locations";
import People from "./categories/People";
import Species from "./categories/Species";
import Vehicles from "./categories/Vehicles";
import CardList2 from "./CardList2"
// import Card2 from "./Card2"
import "./Results.css";
import "./CardList.css"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      categoryComponent: [Films, People, Locations, Species, Vehicles]
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/" + this.props.selectedCategory)
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

  // componentDidUpdate() {
  //   fetch("https://ghibliapi.herokuapp.com/" + this.props.selectedCategory)
  //     .then(response => this.handleHTTPErrors(response))
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         results: result
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
      // const RequestedCategory = this.state.categoryComponent[this.props.selectedCategoryIndex];

      return (
        <CardList2 category={this.props.selectedCategory} results={this.state.results}  />

          // <div className="cardList">
          //     {this.state.results.map(result => (
          //       <Card2 category={this.props.selectedCategory} key={result.id} {...result}  />
          //     ))}
          // </div>
      );
  }
}

export default Results;
