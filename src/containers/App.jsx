import React, { Component } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from "../components/Results";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBoxChecked = this.handleBoxChecked.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      checkboxGroup: [false, false, false, false, false, false],
      categoryArr: ['Films', 'People', 'Locations', 'Species', 'Vehicles'],
      selectedCategory: App,
      showForm: true
    };
  }

  handleBoxChecked(event) {
    let boxChecked = new Array(5);
    boxChecked.fill(false);
    boxChecked[event.target.value] = event.target.checked;
    let categoryIndex = event.target.value;
    this.setState({
      checkboxGroup: boxChecked,
      selectedCategory: this.state.categoryArr[categoryIndex]
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showForm: false
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
            <form className="formStyle">
              <fieldset>
                <h4 className="formTitleStyle">Select a Category</h4>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="radioGroup"
                        value="0"
                        checked={this.state.checkboxGroup[0]}
                        onChange={this.handleBoxChecked}
                      />
                      Films
                    </label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="radioGroup"
                        value="1"
                        checked={this.state.checkboxGroup[1]}
                        onChange={this.handleBoxChecked}
                      />
                      People
                    </label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="radioGroup"
                        value="2"
                        checked={this.state.checkboxGroup[2]}
                        onChange={this.handleBoxChecked}
                      />
                      Locations
                    </label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="radioGroup"
                        value="3"
                        checked={this.state.checkboxGroup[3]}
                        onChange={this.handleBoxChecked}
                      />
                      Species
                    </label>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="radioGroup"
                        value="4"
                        checked={this.state.checkboxGroup[4]}
                        onChange={this.handleBoxChecked}
                      />
                      Vehicles
                    </label>
                  </li>
                </ul>
                <div className="buttonContainer">
                  <button className="buttonStyle" onClick={this.handleSubmitButton}>
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <Results category={this.state.selectedCategory}/>
        </div>
      )
    }
  }
}

export default App;
