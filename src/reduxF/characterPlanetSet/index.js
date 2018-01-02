import{ SET_CHAR_PLANET } from './actions';

const initialState = [];

// reducer - pure function to set the data for component in the state
export default (state = initialState, action)=>{
    switch(action.type){
        case SET_CHAR_PLANET:
            return action.charPlanet;
        default:
         return state; 
    }
}
