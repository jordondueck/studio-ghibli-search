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
    const filmsPageStyle = {
      //height: 200,
      width: 400,
      padding: 0,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666'
    }
    return (
      <div style={filmsPageStyle}> 
        <Title/>
          <ol>
            {this.state.locations.map(person=>
              <Locations2 name={person.name} gender={person.gender}
                    age={person.age} eye_color={person.eye_color}
                    hair_color={person.hair_color}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Locations;