import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie';

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    };
  }

  render() {
    const movies = this.state.movies.map(movie => <Movie key={movie.id} poster={movie.poster_path} title={movie.title}/>)
    return (
      <section className="main-display">
        {movies}
      </section>
    )
  }
}


export default MainDisplay;
