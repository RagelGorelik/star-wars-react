import { API_URL } from '../../constants';
import DataFetcher from '../../DataFetcher.js';
let fetcher = new DataFetcher();

export const SET_PLANETS = 'SET_PLANETS';

export var getPlanets = function  (startId, endId) {
  return dispatch => {
    let result = [];
    for (let i = startId; i <= endId; i++) {
        result.push(fetcher.getPlanet(i));
    }
    return Promise.all(result).then(a=>dispatch ? dispatch(setPlanets(a)) : a);
  }
}

export function setPlanets(planets) {
  return {
    type: SET_PLANETS,
    planets: planets
  };
}
