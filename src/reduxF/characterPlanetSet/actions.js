import { API_URL } from '../../constants';
import DataFetcher from '../../DataFetcher.js';
import {LIST_SIZE, LOOK_AHEAD} from '../../constants.js';
import{ getProfile} from '../character/actions.js'
let fetcher = new DataFetcher();

export const SET_CHAR_PLANET = 'SET_CHAR_PLANET';

//function returns another function because of using redux-thunk. 
//So, if we need we can do asynchronous things direct from it.
export var getCharacterPlanet = function(startId, endId){
    return dispatch => {
        let result = [];
        for (let i = startId; i <= endId; i++) {
            result.push(fetcher.getCharacter(i));
        }
        return Promise.all(result).then(arr=>dispatch && dispatch(setCharacterPlanetSet(arr)) || arr);
    }
}

//action creator: returns an object that represents action, has to have type property!
export function setCharacterPlanetSet(charPlanet){
    return {
        type: SET_CHAR_PLANET,
         charPlanet
     };
}
export function mapDispatchToCharacterProps(dispatch){
	return {
  		getProfileCharacter(character){
            return ()=>dispatch(getProfile(character))
  		},
        setPrevPage(currentFirst){
            if(!currentFirst || currentFirst==1)
                return;
            let prev = currentFirst-LIST_SIZE;
            if (prev<1)
                prev = 1;
            // stop searching for next item if there is a gap in more than 10 
            return ()=>dispatch(getCharacterPlanet(prev, prev+LIST_SIZE+LOOK_AHEAD));
        },
        setNextPage(currentFirst){
            if(!currentFirst)
                return;
            let next = currentFirst+LIST_SIZE;
            return ()=>dispatch(getCharacterPlanet(next, next+LIST_SIZE+LOOK_AHEAD));
        },
      
	}
}