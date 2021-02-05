import React from "react"

const Footer = (props) => {
  console.log(props)
  const genreList = props.props.genres.map(genre => <p>{genre}</p>)
  return(
    <footer>
        <img className="mini-poster" src={props.props.poster} />
        <div className="movie-details">
          <h1>{props.props.title}</h1>
          <h2>{props.props.rating}/10</h2>
          <p>{props.props.tagline}</p>
          <p>Release Date: {props.props.date}</p>
          <p>Runtime: {props.props.runtime} min.</p>
          <p>Budget: ${props.props.budget}</p>
          <p>Revenue: ${props.props.revenue}</p>
        </div>
        <div className="movie-overview">
          <p className="overview-text">{props.props.overview}</p>
          <p>{genreList}</p>
          <button onClick={props.hideView}>GO BACK!!!</button>
        </div>
    </footer>
  )
}

export default Footer
