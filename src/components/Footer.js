import React from "react"

const Footer = (props) => {
  console.log(props)
  const genreList = props.props.genres.map(genre => <p>{genre}</p>)
  return(
    <footer>
        <img className="mini-poster" src={props.props.poster} />
        <div className="movie-details">
          <div className="movie-title-container">
            <h2>{props.props.title}</h2>
            <h2>{props.props.rating}/10</h2>
          </div>
          <p className="tagline">"{props.props.tagline}"</p>
          <div className="details-wrapper">
            <div className="details-sub-wrapper">
              <p>Release Date: {props.props.date}</p>
              <p>Runtime: {props.props.runtime} min.</p>
            </div>
            <div className="details-sub-wrapper">
              <p>Budget: ${props.props.budget}</p>
              <p>Revenue: ${props.props.revenue}</p>
            </div>
          </div>
        </div>
        <div className="movie-overview">
          <div className="overview-wrapper">
            <p className="overview-text">{props.props.overview}</p>
          </div>
            <div className="genre-container">{genreList}</div>
            <button onClick={props.hideView}>BACK</button>
        </div>
    </footer>
  )
}

export default Footer
