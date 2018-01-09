import React from 'react';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router'
import CharacterProfile from './CharacterProfile.js';
import CharPlanetTable from './CharPlanetTable.js';
import style from '../index.css';
const App = ()=>
  <div className='container'>
    <div className='row'>
      <CharPlanetTable/>
      <CharacterProfile/>
    </div>
  </div>

export default App;
