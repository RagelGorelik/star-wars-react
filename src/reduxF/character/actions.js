import DataFetcher from '../../DataFetcher.js';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

export function getProfile(characterPlan){

	return dispatch =>{
				
		/*if(characterPlan ===undefined||characterPlan.hasOwnProperty())
			return dispatch(setCharacterProfile(characterPlan));*/
		//add species properties to profile
        new DataFetcher().getSpecie(characterPlan.character.species[0])
                .then (res => {if(characterPlan!==undefined){characterPlan.species=res}})
	 .then(()=>{return dispatch && dispatch(setCharacterProfile(characterPlan))})
	
	}
}



//action creator
export function setCharacterProfile(profile){
	console.log("new profile",profile);
	return {
		type: SET_CHARACTER_PROFILE,
		profile: profile
};
}


