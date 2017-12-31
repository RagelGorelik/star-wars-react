import { combineReducers } from 'redux';
import character from './character'
import charPlanet from './characterPlanetSet'
import planets from'./planets'

export default combineReducers({
    charPlanet,
    planets,
    character
});