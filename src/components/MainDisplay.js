import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie';
import IndividualView from './IndividualView';

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      individual: false,
      errorMessage: "",
      currentMovie: {
        poster: "",
        backdrop: "",
        title: "",
        rating: "",
        overview: "",
        runtime: "",
        revenue: "",
        budget: "",
        genres: ""
      }
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



  displayIndividual = (id) => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id)
    .then(response => response.json())
    .then(data =>
    this.setState({
      individual: true,
      currentMovie: {
        poster: data.movie.poster_path,
        backdrop: data.movie.backdrop_path,
        title: data.movie.title,
        rating: data.movie.average_rating.toFixed(1),
        overview: data.movie.overview,
        runtime: data.movie.runtime,
        revenue: data.movie.revenue,
        budget: data.movie.budget,
        genres: data.movie.genres,
        tagline: data.movie.tagline,
        date: data.movie.release_date
      }
    }))
    .catch(error => this.setState({
      errorMessage: 'Oops! Something went wrong! Please try again later.',
      movies: []
    }))
  }

  hideIndividual = () => {
    this.setState({
      individual: false
    })
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
      <div>
        {this.state.errorMessage.length &&
          <div>
        <h1 className="error">{this.state.errorMessage}</h1>
        <button onClick={this.componentDidMount}>BACK</button>
          </div>}
        {this.state.individual &&
          <IndividualView key={"this"}
          props={this.state.currentMovie}
          hideIndividual={this.hideIndividual}/>}
      <section className="main-display">
        {movies}
      </section>
      </div>
    )
  }
}


export default MainDisplay;
