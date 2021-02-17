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
  - ```IndividualView.js``` individual view displays detailed information about a movie, but showing a still from the film, and containing the ```Footer.js```.
  - ```Footer.js``` footer renders the data associated with the film, and confirms that there is data available before rendering.
  - ```Error.js``` contains the message that is displayed when a user encounters and error.

## Getting Started
### Clone this repo
run ```git clone git@github.com:DrewBradley/rancid-tomatillos.git```
### Install dependencies
run ```npm install```
### Start your application
run ``` npm start```
### Open application
Navigate to ```localHost:3000```

## Contributors
[Brian Forbes](https://github.com/Codeherder19)
[Drew Bradley](https://github.com/DrewBradley)
[Johnny Cassidy](https://github.com/pjanks)

## Wins/Challenges
### Wins
  - Implementing Cupress.io for testing.
  - Using React Router for conditional rendering.
  - Achieving 100 on Lighthouse audit for Accessibility.
  - Teamwork and Collaboration
  - Creating a potato-based rating scale.
  - Using a custom logo.

### Challenges
  - Displaying an error component.
  - Navigating how to implement the search function.
  - Using new technologies including Cypress, React, and React Router.

## Future Iterations
  - Fetch videos and embed them so a trailer can be viewed when the mini poster is clicked in our individual movie view.
  - Refactor fetch request so we can add functionality to search by genre.
  - Add functionality to be able to search movies by rating.
  - Create user accounts, so users can add movies to favorites.
  - Build out backend to allow users to rate movie, so we can calculate the average rating.

## Thanks
