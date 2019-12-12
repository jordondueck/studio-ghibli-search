import React, { Component } from 'react';
import Header from './Header';
import Species2 from './Species2';
import GhibliForm from '../containers/GhibliForm';

class Species extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      species: [],
      showSpecies: true
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/species')
    .then(response=> this.handleHTTPErrors(response))
    .then(response=> response.json())
    .then(result=> {
      this.setState({
        species: result
      });
    })
    .catch(error=> {
      console.log(error);
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showSpecies: false
    });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const speciesPageStyle = {
      width: '40%',
      maxWidth: '300px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: '1%',
      borderRadius: 25,
      color: '#000000'
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
    const footerStyle = {
      minHeight: '2%',
      width: '100%',
      backgroundColor: '#FFFFFF',
      bottom: 0,
      float: 'right',
      textAlign: 'center',
      fontSize: '14px',
      fontFamily: 'Montserrat',
      position: 'fixed'
    }
    if(this.state.showSpecies) {
      return (
        <div>
            <Header/>
          <div style={speciesPageStyle}> 
            <h2 style={{fontFamily: 'Montserrat', textAlign: 'center', fontSize: '28px'}}>Species</h2>
            <br></br>
            <div style={buttonContainer}>
              <button style={buttonStyle} onClick={this.handleSubmitButton}>Back</button>
            </div>
              <ol style={{listStyle: 'none', paddingLeft: 0}}>
                {this.state.species.map(species=>
                  <Species2 key={species.id} id={species.id} name={species.name}
                        classification={species.classification} eye_colors={species.eye_colors}
                        hair_colors={species.hair_colors}/>
                )}
              </ol>
          </div>
          <div style={footerStyle}>
              Copyright &copy; 2018 Jordon Dueck
          </div>
        </div>
      )
    } else {
      return <GhibliForm />
    }
  }
}

export default Species;