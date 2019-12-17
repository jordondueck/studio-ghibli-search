import React, { Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Results2 from "./Results2";
// import App from "../containers/App";
import Films from "./Films";
import Locations from "./Locations";
import People from "./People";
import Species from "./Species";
import Vehicles from "./Vehicles";
import "./Results.css";

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

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
    if (!this.props.showForm) {
      const RequestedCategory = this.state.categoryComponent[this.props.selectedCategoryIndex];

      return (
          <div className="newFormStyle">
            <h2 className="titleStyle">{this.props.category}</h2>
            <div className="buttonContainer">
              <button className="buttonStyle" onClick={this.props.handleBack}>
                Back
              </button>
            </div>
            <ol>
              {this.state.results.map(result => (
                <RequestedCategory key={result.id} {...result} />
              ))}
            </ol>
          </div>
      );
    // } else {
    //   return <App />;
    }
  }
}

export default Results;
