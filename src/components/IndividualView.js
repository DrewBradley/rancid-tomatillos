import React from "react"

const IndividualView = (props) => {
  return(
    <section className="individual"
    style={{
      backgroundImage: `url("${props.backdrop}")`, backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'}}>
      <h1>{props.title}</h1>
      <p>{props.rating}</p>
    </section>
  )
}

export default IndividualView