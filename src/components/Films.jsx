import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Films2 from './Films2';
import GhibliForm from '../containers/GhibliForm';

class Films extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.state = {
      films: [],
      showFilms: true
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=> this.handleHTTPErrors(response))
    .then(response=> response.json())
    .then(result=> {
      this.setState({
        films: result
      });
    })
    .catch(error=> {
      console.log(error);
    });
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      showFilms: false
    });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const filmsPageStyle = {
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
    if(this.state.showFilms) {
      return (
        <div>
            <Header/>
          <div style={filmsPageStyle}> 
            <h2 style={{fontFamily: 'Montserrat', textAlign: 'center', fontSize: '28px'}}>Films</h2>
            <br></br>
            <div style={buttonContainer}>
              <button style={buttonStyle} onClick={this.handleSubmitButton}>Back</button>
            </div>
              <ol style={{listStyle: 'none', paddingLeft: 0}}>
                {this.state.films.map(film=>
                  <Films2 key={film.id} id={film.id} title={film.title}
                        description={film.description} director={film.director}
                        producer={film.producer} release_date={film.release_date}
                        rt_score={film.rt_score}/>
                )}
              </ol>
          </div>
          <Footer />
        </div>
      )
    } else {
      return <GhibliForm />
    }
  }
}

export default Films;