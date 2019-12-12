import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Results2 from "./Results2";
import App from "../containers/App";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      results: [],
      showResults: true
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

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showResults: false
    });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
    if (this.state.showResults) {
      return (
        <div className="container">
          <Header />
          <div className="newFormStyle">
            <h2 className="titleStyle">{this.props.category}</h2>
            <div className="buttonContainer">
              <button className="buttonStyle" onClick={this.handleSubmitButton}>
                Back
              </button>
            </div>
            <ol>
              {this.state.results.map(result => (
                <Results2 key={result.id} {...result} />
              ))}
            </ol>
          </div>
          <Footer />
        </div>
      );
    } else {
      return <App />;
    }
  }
}

export default Results;
