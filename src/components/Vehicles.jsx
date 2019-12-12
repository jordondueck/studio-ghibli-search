import React, { Component } from 'react';
import Header from './Header';
import Vehicles2 from './Vehicles2';
import GhibliForm from '../containers/GhibliForm';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      vehicles: [],
      showVehicles: true
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/vehicles')
    .then(response=> this.handleHTTPErrors(response))
    .then(response=> response.json())
    .then(result=> {
      this.setState({
        vehicles: result
      });
    })
    .catch(error=> {
      console.log(error);
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showVehicles: false
    });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const vehiclesPageStyle = {
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
    if(this.state.showVehicles) {
      return (
        <div>
            <Header/>
          <div style={vehiclesPageStyle}> 
            <h2 style={{fontFamily: 'Montserrat', textAlign: 'center', fontSize: '28px'}}>Vehicles</h2>
            <br></br>
              <div style={buttonContainer}>
                <button style={buttonStyle} onClick={this.handleSubmitButton}>Back</button>
              </div>
              <ol style={{listStyle: 'none', paddingLeft: 0}}>
                {this.state.vehicles.map(vehicle=>
                  <Vehicles2 key={vehicle.id} id={vehicle.id} name={vehicle.name}
                        description={vehicle.description} vehicle_class={vehicle.vehicle_class}
                        length={vehicle.length}/>
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

export default Vehicles;