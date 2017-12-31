import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CharacterProfile from './Components_/CharacterProfile';
import planetTable from './Components_/Planets';
import charPlanetTable from './Components_/CharPlanetTable';
import App from './Components_/App'

export const routes = (
  <div>
  	<Route path='/' component={App}/>	
    <Route path='/planets' component={planetTable}/>
  </div>
)
