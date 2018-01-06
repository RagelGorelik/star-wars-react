import{ SET_RESIDENTS } from './actions';

const initialState = [];

export default (state = initialState, action)=>{
    switch(action.type){
        case SET_RESIDENTS:
            return action.residents;
       default:
         return state; 
    }
}