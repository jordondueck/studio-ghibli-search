import React, { Component } from "react";
import NavBar from "../components/NavBar.jsx";
import NavBar2 from "../components/NavBar2.jsx";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Results from "../components/Results";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleBack = this.handleBack.bind(this);
    this.handleNav = this.handleNav.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.state = {
      formInput: {
        value: [0, 1, 2, 3, 4],
        checked: [false, false, false, false, false]
      },
      category: ["Films", "People", "Locations", "Species", "Vehicles"],
      selectedCategory: App,
      selectedCategoryIndex: -1,
    };
  }

  // handleSelect(event) {
  //   let boxChecked = new Array(5).fill(false);
  //   boxChecked[event.target.value] = event.target.checked;
  //   let categoryIndex = event.target.value;
  //   this.setState({
  //     selectedCategory: this.state.category[categoryIndex],
  //     selectedCategoryIndex: categoryIndex
  //   })
  //   // Update state for formInput (Object)
  //   this.setState(prevState => {
  //     let formInput = { ...prevState.formInput }
  //     formInput.checked = boxChecked;
  //     return { formInput }
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({
  //     showForm: false
  //   });
  // }

  // handleBack(event) {
  //   event.preventDefault();
  //   this.setState({
  //     showForm: true
  //   });
  //   this.setState(prevState => {
  //     let formInput = { ...prevState.formInput }
  //     formInput.checked.fill(false);
  //     return { formInput }
  //   });
  // }

  handleNav(event) {
    event.preventDefault();
    console.log('event.target.id' , event.target.id)
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
          <NavBar2 category={this.state.category} handleNav={this.handleNav}  />
          <section className="content">
            <CardList category={this.state.category} handleNav={this.handleNav} />
            {/* Select a category */}
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <NavBar category={this.state.category} handleNav={this.handleNav} handleHome={this.handleHome} />
          <section className="content">
            <Results
              // handleBack={this.handleBack}
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
