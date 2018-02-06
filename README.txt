Star Wars Application - Javascript, React.js, Redux & SWAPI

Page 1:  Entry page. Lists the star wars characters and their home planets.
Page 2:  Planets list including name, terrain and population.
I used APIs supplied by https://swapi.co/
This web application based on javascript, using React. 
I used Redux to manage data and organise an architecture of the application.
To make a connection of React component to a Redux store I used react-redux.
To route pages in this application I used react-router.
But if you use this solution with redux (connect function), you should know, that it could be a little tricky.
Also API has gaps: some id of the character doesn’t exist. To overcome those
gaps I used look ahead greedy strategy: request more data than required to
have guaranteed list to draw, the rest of the data is stored in the cache.

####Plans: to organise a work with API’s gaps more effective and carry on.  

####Installation

Install the project by:

$ git clone https://github.com/RagelGorelik/star-wars-react
$ cd star-wars-react/
$ npm install

####To view page locally

$ npm run serve
