import React, { Component } from 'react';
import Title from './Title';
import People2 from './People2';
import GhibliForm from '../containers/GhibliForm';
import "../containers/Container.css"

class People extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      people: [],
      showPeople: true
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

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showPeople: false
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
    const peoplePageStyle = {
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
    if(this.state.showPeople) {
      return (
        <div>
          <div style={titleStyle}>
            <Title/>
          </div>
          <div style={peoplePageStyle}> 
            <h2 style={{fontFamily: 'Montserrat', textAlign: 'center', fontSize: '28px'}}>People</h2>
            <br></br>
            <div style={buttonContainer}>
              <button style={buttonStyle} onClick={this.handleSubmitButton}>Back</button>
            </div>
              <ol style={{listStyle: 'none', paddingLeft: 0}}>
                {this.state.people.map(person=>
                  <People2 key={person.id} id={person.id} name={person.name}
                          gender={person.gender} age={person.age}
                          eye_color={person.eye_color} hair_color={person.hair_color}
                          films={person.films}/>
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

export default People;