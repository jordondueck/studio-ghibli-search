import React, { Component } from 'react';
import Title from './Title/Title';
import Locations2 from './Locations2';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
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

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const locationsPageStyle = {
      width: 400,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: 10,
      borderRadius: 25,
      color: '#000000'
    }
    return (
      <div style={locationsPageStyle}> 
        <Title/>
          <ol>
            {this.state.locations.map(location=>
              <Locations2 key={location.id} id={location.id} name={location.name}
                    climate={location.climate} terrain={location.terrain}
                    surface_water={location.surface_water} residents={location.residents}
                    films={location.films}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Locations;