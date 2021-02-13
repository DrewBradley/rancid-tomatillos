import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="app-name">Grouch Potato</h1>
      <div className="input-wrapper">
        <label for="search"></label>
        <input placeholder="search movies by title" type="text" name="search" className="search-bar"></input>
      </div>
    </header>
  )
}










export default Header;
