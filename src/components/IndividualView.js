import React from "react"
import "../App.css"

const IndividualView = (props) => {
  console.log(props)
  return(
    <section className="individual"
    style={{
      backgroundImage: `url("${props.props.backdrop}")`, backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'}}>
      <div className="individual-container">
        <h1>{props.props.title}</h1>
        <p>{props.props.rating}</p>
      </div>
    </section>
  )
}

export default IndividualView