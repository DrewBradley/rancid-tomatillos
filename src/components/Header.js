import React from 'react';
import grouch from '../grouch-potato.png'

const Header = (props) => {
  return (
    <header>
      <div className='logo-and-name-wrapper'>
        <img className='logo' src={grouch}/>
        <h1 className="app-name">Grouch Potato</h1>
      </div>
      <div className="input-wrapper">
        <label for="search"></label>
        <input 
          placeholder="Search By Title" 
          type="text" 
          name="search" 
          className="search-bar"
          list="movie-title-list"
          onChange={props.searchMovies}
        ></input>
        <datalist id="movie-title-list">
          {props.movies.map(movie=> <option value={movie.title}/>)}
        </datalist>
      </div>
    </header>
  )
}










export default Header;
