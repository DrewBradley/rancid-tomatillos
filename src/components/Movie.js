import React from 'react'

const Movie = (props) => {
  return (
    // {<div className="movie-thumb">}
      <div className="background-img"
      style={{
        backgroundImage: `url(${props.poster})`, backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}
      onClick={() => props.showIndividual(props.id)}>
        <div className="title-container">
          <h1 className="title">{props.title}</h1>
        </div>
      </div>
    // {</div>}
  )
}



export default Movie;
