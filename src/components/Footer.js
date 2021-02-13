import React from "react"
import { Link } from "react-router-dom"

const Footer = ({ poster, title, rating, overview, runtime, revenue, budget, genres, tagline, date }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const defaultBudget = budget => {
    return budget > 0 ? budget : Math.floor(Math.random() * 300000000)
  }
  console.log(tagline)
  const defaultData = info => {
    return info ? info : "Not Available"
  }
  return(
    <footer>
      <img alt={title} className="mini-poster" src={poster} />
      <div className="movie-details">
        <div className="movie-title-container">
          <h2 className="movie-preview-title">{title}</h2>
          <h2 className="movie-rating">{rating}/10</h2>
        </div>
        <p className="tagline">{tagline}</p>
        <div className="details-wrapper">
          <div className="details-sub-wrapper">
            <p className="release-date">Release Date: {defaultData(date)}</p>
            <p className="runtime">Runtime: {defaultData(runtime)} min.</p>
          </div>
          <div className="details-sub-wrapper">
            <p className="budget">Budget: {formatter.format(defaultBudget(budget))}</p>
            <p className="revenue">Revenue: {formatter.format(defaultBudget(revenue))}</p>
          </div>
        </div>
        </div>
        <div className="movie-overview">
          <div className="overview-wrapper">
            <p className="overview-text">{overview}</p>
          </div>
          <div className="genre-container">
            <Link to={"/"}>
              <button>⇦ Back</button>
            </Link>
            {genres}
          </div>
        </div>
      </footer>
    )
  }

export default Footer
