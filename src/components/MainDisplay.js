import React from 'react';
import Movie from './Movie';
import Header from './Header';

const MainDisplay = (props) => {
    const movies = props.movies.map(movie => <Movie
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      backdrop={movie.backdrop_path}
      rating={movie.average_rating}
      />)

    return (
      <div>
        <Header searchMovies={props.searchMovies} movies={props.movies}/>
        <section className="main-display">
          {movies}
        </section>
      </div>
    )
  }

export default MainDisplay;
