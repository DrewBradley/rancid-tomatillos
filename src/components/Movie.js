import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie-thumb">
      <img src={props.poster}/>
    </div>
  )
}



export default Movie;
