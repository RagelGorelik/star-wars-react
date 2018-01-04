import{ SET_RESIDENTS } from './actions';

const initialState = [];

export default (state = initialState, action)=>{
    switch(action.type){
        case SET_RESIDENTS:
        console.log("I am in SET_RESIDENTS ",action.residents);
            return action.residents;
       default:
         return state; 
    }
}