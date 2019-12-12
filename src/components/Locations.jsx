import React, { Component } from 'react';
import Title from './Title';
import Locations2 from './Locations2';
import GhibliForm from '../containers/GhibliForm';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      locations: [],
      showLocations: true
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(response=> this.handleHTTPErrors(response))
    .then(response=> response.json())
    .then(result=> {
      this.setState({
        locations: result
      });
    })
    .catch(error=> {
      console.log(error);
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showLocations: false
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
    const locationsPageStyle = {
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
    if(this.state.showLocations) {
      return (
        <div>
          <div style={titleStyle}>
            <Title/>
          </div>
          <div style={locationsPageStyle}> 
            <h2 style={{fontFamily: 'Montserrat', textAlign: 'center', fontSize: '28px'}}>Locations</h2>
            <br></br>
            <div style={buttonContainer}>
              <button style={buttonStyle} onClick={this.handleSubmitButton}>Back</button>
            </div>
              <ol style={{listStyle: 'none', paddingLeft: 0}}>
                {this.state.locations.map(location=>
                  <Locations2 key={location.id} id={location.id} name={location.name}
                        climate={location.climate} terrain={location.terrain}
                        surface_water={location.surface_water} residents={location.residents}
                        films={location.films}/>
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

export default Locations;