import React, { Component } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer";
import Dashboard from "../components/dashboard/Dashboard";
import Results from "../components/Results";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.state = {
      category: ["Films", "Locations", "People", "Species", "Vehicles"],
      selectedCategory: App,
      selectedCategoryIndex: -1
    };
  }

  handleNav(event) {
    event.preventDefault();
    this.setState({
      selectedCategory: this.state.category[event.target.id],
      selectedCategoryIndex: event.target.id
    });
  }

  handleHome(event) {
    event.preventDefault();
    this.setState({
      selectedCategoryIndex: -1
    });
  }

  render() {
    if (this.state.selectedCategoryIndex === -1) {
      return (
        <div className="container">
          <NavBar
            category={this.state.category}
            selectedCategoryIndex={this.state.selectedCategoryIndex}
            handleNav={this.handleNav}
            handleHome={this.handleHome}
          />
          <section className="content">
            <Dashboard
              category={this.state.category}
              handleNav={this.handleNav}
            />
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <NavBar
            category={this.state.category}
            selectedCategoryIndex={this.state.selectedCategoryIndex}
            handleNav={this.handleNav}
            handleHome={this.handleHome}
          />
          <section className="content">
            <Results
              selectedCategory={this.state.selectedCategory}
              selectedCategoryIndex={this.state.selectedCategoryIndex}
            />
          </section>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
