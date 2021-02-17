import React from 'react';
import grouch from '../grouch-potato.png'

const Header = (props) => {
  return (
    <header>
      <div className='logo-and-name-wrapper'>
        <img className='logo' src={grouch} alt="Angry mister potato head smoking a cigar"/>
        <h1 className="app-name">Grouch Potato</h1>
      </div>
      <div className="input-wrapper">
        <label for="search"></label>
        <input placeholder="Search By Title" type="text" name="search" className="search-bar" onChange={props.searchMovies}></input>
      </div>
    </header>
  )
}










export default Header;
