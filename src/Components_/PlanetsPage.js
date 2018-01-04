import React from 'react';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router'
import Planets from './Planets.js';
import PlanetsResidents from './PlanetsResidents.js';

const PlanetsPage = ()=>
  <div className='container'>
    <div className='row'>
      <Planets/>
      <PlanetsResidents/>
    </div>
  </div>

export default PlanetsPage;
