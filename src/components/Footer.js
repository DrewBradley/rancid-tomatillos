import React from "react"

const Footer = (props) => {
  console.log(props)
  return(
    <footer>
        <img className="mini-poster" src={props.props.poster} />
        <h1>TITLE: {props.props.title}</h1>
        <p>RATING: {props.props.rating}</p>
        <button onClick={props.hideView}>GO BACK!!!</button>
    </footer>
  )
}

export default Footer