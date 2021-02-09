import React from "react"
import { Link } from "react-router-dom"

const Footer = ({ id, poster, backdrop, title, rating, overview, runtime, revenue, budget, genres, tagline, date }) => {
  console.log(backdrop)
  // const genreList = ..genres.map(genre => 
  //   <p>{genre}</p>)
  return(
    <footer>
        <img className="mini-poster" src={poster} />
        <div className="movie-details">
          <div className="movie-title-container">
            <h2>{title}</h2>
            <h2>{rating}/10</h2>
          </div>
          <p>{tagline}</p>
          <p>Release Date: {date}</p>
          <p>Runtime: {runtime} min.</p>
          <p>Budget: ${budget}</p>
          <p>Revenue: ${revenue}</p>
        </div>
        <div className="movie-overview">
          <p className="overview-text">{overview}</p>
          <div className="genre-container"> 
             {genres} 
          </div>
          <button>GO BACK!!!</button>
        </div>
    </footer>
  )
}

export default Footer
