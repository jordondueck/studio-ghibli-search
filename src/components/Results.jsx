import React, { Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Results2 from "./Results2";
import App from "../containers/App";
import Films from "./Films2";
import Locations from "./Locations2";
import People from "./People2";
import Species from "./Species2";
import Vehicles from "./Vehicles2";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    // this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {
      results: [],
      // showResults: true,
      categoryClassArr: [Films, People, Locations, Species, Vehicles]
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/" + this.props.category)
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

  // handleBackButton(event) {
  //   event.preventDefault();
  //   this.props.showForm = true;
  //   this.setState({
  //     showResults: false
  //   });
  // }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
    if (this.props.showResults) {
      // console.log('this.props.category' , this.props.category);
      // console.log('this.state.categoryClassArr' , this.state.categoryClassArr);
      // const RequestedCategory = this.state.categoryClassArr.indexOf(this.props.category);
      // console.log('RequestedCategory' , RequestedCategory);
      const RequestedCat = this.state.categoryClassArr[this.props.categoryIndex]
      // switch(this.props.categoryIndex) {
      //   case 0:
      //     // code block
      //     break;
      //   case 1:
      //     // code block
      //     break;
      //   case 2:
      //     // code block
      //     break;
      //   case 3:
      //     // code block
      //     break;
      //   default:
      //     // code block
      // }
      return (
          <div className="newFormStyle">
            <h2 className="titleStyle">{this.props.category}</h2>
            <div className="buttonContainer">
              <button className="buttonStyle" onClick={this.props.handleBackButton}>
                Back
              </button>
            </div>
            <ol>
              {this.state.results.map(result => (
                <RequestedCat key={result.id} {...result} />
              ))}
            </ol>
          </div>
      );
    } else {
      return <App />;
    }
  }
}

export default Results;
