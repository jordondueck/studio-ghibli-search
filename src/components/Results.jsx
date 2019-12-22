import React, { Component } from "react";
import CardList from "./card/CardList";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
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
    return (
      <section>
        <h2 className="category--title">{this.props.selectedCategory}</h2>
        <CardList
          category={this.props.selectedCategory}
          results={this.state.results}
        />
      </section>
    );
  }
}

export default Results;
