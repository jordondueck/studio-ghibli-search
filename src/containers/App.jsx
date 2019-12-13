import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Results from "../components/Results";
import Form from "../components/Form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBoxChecked = this.handleBoxChecked.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {
      checkboxGroup: [false, false, false, false, false, false],
      categoryArr: ["Films", "People", "Locations", "Species", "Vehicles"],
      selectedCategory: App,
      selectedCategoryIndex: -1,
      showForm: true,
      showResults: false
    };
  }

  handleBoxChecked(event) {
    let boxChecked = new Array(5);
    boxChecked.fill(false);
    boxChecked[event.target.value] = event.target.checked;
    let categoryIndex = event.target.value;
    this.setState({
      checkboxGroup: boxChecked,
      selectedCategory: this.state.categoryArr[categoryIndex],
      selectedCategoryIndex: categoryIndex
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showForm: false,
      showResults: true
    });
  }

  handleBackButton(event) {
    event.preventDefault();
    let boxChecked = new Array(5);
    boxChecked.fill(false);
    this.setState({
      showResults: false,
      checkboxGroup: boxChecked,
      showForm: true
    });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
    if (this.state.showForm) {
      return (
        <div className="containerStyle">
          <Header />
          <section className="contentStyle">
            <Form
              handleBoxChecked={this.handleBoxChecked}
              handleSubmitButton={this.handleSubmitButton}
              checkboxGroup={this.state.checkboxGroup}
            />
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Header />
          <section className="contentStyle">
            <Results
              category={this.state.selectedCategory}
              categoryIndex={this.state.selectedCategoryIndex}
              showForm={this.state.showForm}
              showResults={this.state.showResults}
              handleBackButton={this.handleBackButton}
            />
          </section>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
