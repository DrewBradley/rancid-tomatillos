import React from 'react'
import './App.css';
import MainDisplay from './components/MainDisplay';
import {Route, Switch, Redirect} from "react-router-dom";
import IndividualView from './components/IndividualView';
import Error from './components/Error';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.movies,
      errorMessage: ""
    }))
  .catch(error => {
        this.setState({errorMessage: error})
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact render={() => this.state.errorMessage ? <Error /> : <MainDisplay movies={this.state.movies}/> } />
          <Route exact path="/movie/:id"
          render={( { match }) =>
            {
            const movieID = parseInt(match.params.id)
            const allMovieIDs = this.state.movies.map(movie => movie.id)
            return allMovieIDs.includes(movieID) ? <IndividualView id={ movieID } /> : <Error /> }} />
        </Switch>
      </div>
    );
  }
}

export default App;
