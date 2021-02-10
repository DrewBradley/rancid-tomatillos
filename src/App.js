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
        console.log(error.message)
        this.setState({errorMessage: error})
        console.log(this.state.errorMessage)
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact render={() => this.state.errorMessage ? <Error /> : <MainDisplay movies={this.state.movies}/>}/>
          <Route path="/movie/:id"
          render={(props) => <IndividualView {...props} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
