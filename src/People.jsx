import React, { Component } from 'react';
import Title from './Title/Title';
import People2 from './People2';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(response=> this.handleHTTPErrors(response))
    .then(response=> response.json())
    .then(result=> {
      this.setState({
        people: result
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
    const peoplePageStyle = {
      width: 400,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: 10,
      borderRadius: 25,
      color: '#000000'
    }
    return (
      <div style={peoplePageStyle}> 
        <Title/>
          <ol>
            {this.state.people.map(person=>
              <People2 key={person.id} id={person.id} name={person.name}
                      gender={person.gender} age={person.age}
                      eye_color={person.eye_color} hair_color={person.hair_color}
                      films={person.films}/>
            )}
          </ol>
      </div>
    )
  }
}

export default People;