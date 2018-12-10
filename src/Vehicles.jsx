import React, { Component } from 'react';
import Title from './Title/Title';
import Vehicles2 from './Vehicles2';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
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

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const vehiclesPageStyle = {
      width: 400,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: 10,
      borderRadius: 25,
      color: '#000000'
    }
    return (
      <div style={vehiclesPageStyle}> 
        <Title/>
          <ol>
            {this.state.vehicles.map(vehicle=>
              <Vehicles2 key={vehicle.id} id={vehicle.id} name={vehicle.name}
                    description={vehicle.description} vehicle_class={vehicle.vehicle_class}
                    length={vehicle.length}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Vehicles;