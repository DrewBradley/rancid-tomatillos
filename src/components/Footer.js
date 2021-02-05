import React from "react"

const Footer = (props) => {
  console.log(props)
  return(
    <footer>
        <img className="mini-poster" src={props.props.poster} />
        <div className="movie-details">
          <h1>{props.props.title}</h1>
          <h2>{props.props.rating}/10</h2>
          <p>tagline</p>
          <p>RUNTIME</p>
          <p>BUDGET</p>
          <p>REVENUE</p>
        </div>
        <div className="movie-overview">
          <p className="overview-text">I'm baby wolf viral tilde kickstarter la croix. Mixtape williamsburg photo booth direct trade dolor tumblr tofu. Meditation disrupt cornhole mollit, consectetur cray pabst est. Minim mustache swag, ramps gluten-free wolf enamel pin artisan dolore waistcoat tilde tattooed pour-over activated charcoal church-key. Chillwave qui chia id, 90's proident offal.
          </p>
          <ul>
            <li>genre</li>
            <li>genre</li>
          </ul>
          <button onClick={props.hideView}>GO BACK!!!</button>
        </div>
    </footer>
  )
}

export default Footer