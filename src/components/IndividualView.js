import React from "react"
import Footer from "./Footer"
import Error from "./Error"
import "../App.css"
import {NavLink} from "react-router-dom"

class IndividualView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      errorMessage: null
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.status === 200 ? response.json() : this.setState({errorMessage: response.status}))
      .then(data => this.setState({
        id: data.movie.id,
        poster: data.movie.poster_path,
        backdrop: data.movie.backdrop_path,
        title: data.movie.title,
        rating: data.movie.average_rating.toFixed(1),
        overview: data.movie.overview,
        runtime: data.movie.runtime,
        revenue: data.movie.revenue,
        budget: data.movie.budget,
        genres: data.movie.genres.map(genre =>
          <p className="genres">{genre}</p>),
        tagline: data.movie.tagline,
        date: data.movie.release_date
      }))
      .catch(error => console.log(error))
  }

  render(){
    return this.state.errorMessage ? <Error /> :
     (
      <section className="individual"
      style={{
        backgroundImage: `url("${this.state.backdrop}")`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
        <Footer
        id={this.state.id}
        poster={this.state.poster}
        title= {this.state.title}
        rating= {this.state.rating}
        overview= {this.state.overview}
        runtime= {this.state.runtime}
        revenue={this.state.revenue}
        budget={this.state.budget}
        genres={this.state.genres}
        tagline={this.state.tagline}
        date={this.state.date}
/>
      </section>
    )
  }
}

export default IndividualView
