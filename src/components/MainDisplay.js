import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie'

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    };
  }

  render() {
    return (
      <h1>
      This is the main display
      </h1>
    )
  }
}


export default MainDisplay;
