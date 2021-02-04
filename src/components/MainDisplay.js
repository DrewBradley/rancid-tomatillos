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
        backdrop: movie.backdrop,
        title: movie.title,
        rating: movie.rating
      }
    })
    console.log(this.state.currentMovie)
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
          props={this.state.currentMovie}/>}
      <section className="main-display">
        {movies}
      </section>
      </div>
    )
  }
}


export default MainDisplay;
