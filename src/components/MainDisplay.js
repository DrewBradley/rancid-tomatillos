import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie';
import IndividualView from './IndividualView';

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.movies,
      errorMessage: ""
    }))
  .catch(error => this.setState({errorMessage: 'Oops! Something went wrong! Please try again later.'}))
  }

  render() {
    const movies = this.state.movies.map(movie => <Movie
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      backdrop={movie.backdrop_path}
      rating={movie.average_rating}
      showIndividual={this.displayIndividual}/>)
    return (
      <section className="main-display">
        {movies}
      </section>
    )
  }
}


export default MainDisplay;
