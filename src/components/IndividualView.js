import React from "react"
import Footer from "./Footer"
import "../App.css"

const IndividualView = (props) => {
  console.log(props)
  return(
    <section className="individual"
    style={{
      backgroundImage: `url("${props.props.backdrop}")`, backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'}}>
      <Footer props={props.props} hideView={props.hideIndividual}/>
    </section>
  )
}

export default IndividualView