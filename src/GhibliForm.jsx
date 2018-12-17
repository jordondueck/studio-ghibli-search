import React, { Component } from 'react';
import Films from './Films';
import People from './People';
import Locations from './Locations';
import Species from './Species';
import Vehicles from './Vehicles';
import headerPic from './images/ghibli-header.png';
import footerPic from './images/ghibli-char-group.png';

class GhibliForm extends Component {
  constructor(props) {
    super(props);
    this.handleBoxChecked = this.handleBoxChecked.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      checkboxGroup: [ false, false, false, false, false, false ], 
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
    if(this.state.checkboxGroup[0]) {
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
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const titleStyle = {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      fontFamily: 'Montserrat'
    }
    const mainFormStyle = {
      margin: 'auto',
      width: '40%',
      maxWidth: '300px',
      padding: '1%',
      borderRadius: 25,
      backgroundColor: '#F1F1F1',
      color: '#000000',
      fontSize: 18,
      fontFamily: 'Calibri Light'
    }
    const bgFormStyle = {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      height: '100%',
      padding: '3%'
    }
    const buttonContainer = {
      textAlign: 'center'
    }
    const buttonStyle = {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      borderRadius: 50,
      borderColor: '#000000',
      padding: '1%',
      width: '35%',
      display: 'inline-block',
      fontFamily: 'Montserrat'
    }
    const footerImageStyle = {
      float: 'right',
      padding: '3% 0 0 0'
    }
    const footerStyle = {
      minHeight: '2%',
      width: '100%',
      backgroundColor: '#F1F1F1',
      bottom: 0,
      float: 'right',
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: 'Montserrat',
      position: 'fixed'
    }
    if(this.state.showForm) {
      return (
        <div>
          <div style={titleStyle}>
            <h1>Studio Ghibli Search</h1>
            <img style={{position: 'absolute', top: '0px', right: '0px', height: '200px', width: '200px'}} src={headerPic} alt='Ghibli header'/>
            <h2>Select a Category</h2>
          </div>
          <div style={bgFormStyle}>
            <form style={mainFormStyle}>
              <fieldset>
              <label>
                  Films
                  <input type='radio' name='radioGroup' value='0'
                  checked={this.state.checkboxGroup[0]} onChange={this.handleBoxChecked}/>
                </label>
                <br /><br />
                <label>
                  People
                  <input type='radio' name='radioGroup' value='1'
                  checked={this.state.checkboxGroup[1]} onChange={this.handleBoxChecked}/>
                </label>
                <br /><br />
                <label>
                  Locations
                  <input type='radio' name='radioGroup' value='2'
                  checked={this.state.checkboxGroup[2]} onChange={this.handleBoxChecked}/>
                </label>
                <br /><br />
                <label>
                  Species
                  <input type='radio' name='radioGroup' value='3'
                  checked={this.state.checkboxGroup[3]} onChange={this.handleBoxChecked}/>
                </label>
                <br /><br />
                <label>
                  Vehicles
                  <input type='radio' name='radioGroup' value='4'
                  checked={this.state.checkboxGroup[4]} onChange={this.handleBoxChecked}/>
                </label>
                <br /><br />
                <div style={buttonContainer}>
                <button style={buttonStyle} onClick={this.handleSubmitButton}>Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
          <div>
            <img style={footerImageStyle} src={footerPic} alt='Ghibli Footer'/>
          </div>
          <div style={footerStyle}>
            Copyright &copy; 2018 Jordon Dueck
          </div>
          
        </div>
      );
    } else {
      return <this.state.renderPage />
    }
  }
}

export default GhibliForm;