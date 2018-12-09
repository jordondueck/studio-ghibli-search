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
      // height: 200,
      width: 400,
      padding: 0,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #666'
    }
    return (
      <div style={filmsPageStyle}> 
        <Title/>
          <ol>
            {this.state.films.map(film=>
              <Films2 key={film.episode_id} title={film.title} episode_id={film.episode_id}
                    opening_crawl={film.opening_crawl} director={film.director}
                    producer={film.producer} release_date={film.release_date}/>
            )}
          </ol>
      </div>
    )
  }
}

export default Films;