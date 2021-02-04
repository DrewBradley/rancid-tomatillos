import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie';
import IndividualView from './IndividualView';

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      individual: false,
      currentMovie: ""
    };
  }

  displayIndividual = (movie) => {
    console.log(movie)
    this.setState({
      individual: true,
      currentMovie: {
        poster: movie.poster,
        backdrop: movie.backdrop,
        title: movie.title,
        rating: movie.rating.toFixed(1)
      }
    })
    console.log(this.state.currentMovie)
  }

  hideIndividual = () => {
    this.setState({
      individual: false
    })
  }

  render() {
    const movies = this.state.movies.map(movie => <Movie  
      key={movie.id} 
      poster={movie.poster_path} 
      title={movie.title}
      backdrop={movie.backdrop_path}
      rating={movie.average_rating}
      showIndividual={this.displayIndividual}/>)
    return (
      <div>
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
