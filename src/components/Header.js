import React from 'react';
import ReactDOM from 'react-dom';
import grouch from '../grouch-potato.png'

const Header = () => {
  return (
    <header>
      <div className='logo-and-name-wrapper'>
        <img className='logo' src={grouch}/>
        <h1 className="app-name">Grouch Potato</h1>
      </div>
      <div className="input-wrapper">
        <label for="search"></label>
        <input placeholder="Search Movies By Title" type="text" name="search" className="search-bar"></input>
      </div>
    </header>
  )
}










export default Header;
