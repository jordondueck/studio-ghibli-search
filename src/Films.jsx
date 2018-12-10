import React, { Component } from 'react';
import Title from './Title/Title';
import Films2 from './Films2';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
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

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status +
      ': ' + response.statusText);
    return response;
  }

  render() {
    const filmsPageStyle = {
      width: 400,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666',
      margin: 'auto',
      padding: 10,
      borderRadius: 25,
      color: '#000000'
    }
    return (
      <div style={filmsPageStyle}> 
        <Title/>
          <ol style={{listStyle: 'none', paddingLeft: 0}}>
            {this.state.films.map(film=>
              <Films2 key={film.id} id={film.id} title={film.title}
                    description={film.description} director={film.director}
                    producer={film.producer} release_date={film.release_date}
                    rt_score={film.rt_score}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Films;