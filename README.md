# Grouch Potato

## Overview
Grouch Potato allows users to browse todays top movies! Users can scroll through a thumbnails of all movies, or usee the search function to find a specific movie by title. When users click on a movie thumbnail, they are brought to page that displays movie details about the specific movies.

## Deployed site
[ADD THE LINK HERE](www.example.com)

## Screenshot
![Desktop Search](https://media.giphy.com/media/B0zBDxo8fTz7rS7hWJ/giphy.gif)</br>
![Desktop View](https://media.giphy.com/media/YYOCGB5n4CjFOisdAV/giphy.gif)</br>
![Mobile View](https://media.giphy.com/media/TB3YXijR62TMYMXxSy/giphy.gif)</br>

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Tests were done using Cypress.io.

## Architecture

Grouch Potato is built with React and is controlled by seven main JavaScript files: 
  - ```App.js``` contains all other elements, and is the home of our ```BrowserRouter```
  - ```MainDisplay.js``` displays the ```Header.js``` element and the grid that renders our ```Movie.js``` components.
  - ```Header.js``` holds our title, logo, and search elements. 
  - ```Movie.js``` contains the thumbnail of the movie poster, and allows users to click on the movie to see more details. It also contains a hidden elemtn that allows screenreaders to display the title, without it being rendered outside of the movie poster.
  - ```IndividualView.js``` 
  - ```Footer.js```
  - ```Error.js```

## Getting Started

## Contributors

## Wins/Challenges

## Thanks
