import React, { Component } from "react";
import Title from '../components/Title';
import Films from "../components/Films";
import People from "../components/People";
import Locations from "../components/Locations";
import Species from "../components/Species";
import Vehicles from "../components/Vehicles";
// import headerPic from "./images/ghibli-header.png";
// import footerPic from "./images/ghibli-char-group2.png";
import "./Container.css"

class GhibliForm extends Component {
  constructor(props) {
    super(props);
    this.handleBoxChecked = this.handleBoxChecked.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      checkboxGroup: [false, false, false, false, false, false],
      showForm: true,
      renderPage: ""
    };
  }

  handleBoxChecked(event) {
    let boxChecked = this.state.checkboxGroup.slice();
    boxChecked[event.target.value] = event.target.checked;
    this.setState({
      checkboxGroup: boxChecked
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    //let renderPageString = event.target.value;
    let renderPageClass;
    if (this.state.checkboxGroup[0]) {
      renderPageClass = Films;
    } else if (this.state.checkboxGroup[1]) {
      renderPageClass = People;
    } else if (this.state.checkboxGroup[2]) {
      renderPageClass = Locations;
    } else if (this.state.checkboxGroup[3]) {
      renderPageClass = Species;
    } else if (this.state.checkboxGroup[4]) {
      renderPageClass = Vehicles;
    }
    this.setState({
      showForm: false,
      renderPage: renderPageClass
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
          <Title />
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
          {/* <img className="footerImageStyle" src={footerPic} alt='Ghibli Footer'/> */}
          <footer className="footerStyle">
            <p>Copyright &copy; 2019 Jordon Dueck</p>
          </footer>
        </div>
      );
    } else {
      return <this.state.renderPage />;
    }
  }
}

export default GhibliForm;
