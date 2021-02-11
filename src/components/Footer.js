import React from "react"
import { Link } from "react-router-dom"

const Footer = ({ poster, title, rating, overview, runtime, revenue, budget, genres, tagline, date }) => {
  return(
    <footer>
      <img className="mini-poster" src={poster} />
      <div className="movie-details">
        <div className="movie-title-container">
          <h2>{title}</h2>
          <h2>{rating}/10</h2>
        </div>
        <p className="tagline">{tagline}</p>
        <div className="details-wrapper">
          <div className="details-sub-wrapper">
            <p>Release Date: {date}</p>
            <p>Runtime: {runtime} min.</p>
          </div>
          <div className="details-sub-wrapper">
            <p>Budget: ${budget}</p>
            <p>Revenue: ${revenue}</p>
          </div>
        </div>
        </div>
        <div className="movie-overview">
          <div className="overview-wrapper">
            <p className="overview-text">{overview}</p>
          </div>
          <div className="genre-container"> 
            {genres} 
          </div>
        <Link to={"/"}>
          <button>GO BACK!!!</button>
        </Link>
        </div>
      </footer>
    )
  }

export default Footer
