import React from 'react';
import Movie from './Movie';

const MainDisplay = (props) => {
   console.log(props)
    const movies = props.movies.map(movie => <Movie
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      backdrop={movie.backdrop_path}
      rating={movie.average_rating}
      />)

    return (
      <section className="main-display">
        {movies}
      </section>
    )
  }

export default MainDisplay;
