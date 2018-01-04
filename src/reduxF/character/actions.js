import DataFetcher from '../../DataFetcher.js';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

export function getProfile(characterPlan){

	return dispatch =>{
        new DataFetcher().getSpecie(characterPlan.character.species[0])
	 		.then((res) => {return dispatch && dispatch(setCharacterProfile(Object.assign({species: res}, characterPlan)))})
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


