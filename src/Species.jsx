import React, { Component } from 'react';
import Title from './Title/Title';
import Species2 from './Species2';

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: []
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

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const speciesPageStyle = {
      width: 400,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: 10,
      borderRadius: 25,
      color: '#000000'
    }
    return (
      <div style={speciesPageStyle}> 
        <Title/>
          <ol>
            {this.state.species.map(species=>
              <Species2 key={species.id} id={species.id} name={species.name}
                    classification={species.classification} eye_colors={species.eye_colors}
                    hair_color={species.hair_color}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Species;