export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

//action creator
export function setCharacterProfile(profile){
	return {
		type: SET_CHARACTER_PROFILE,
		profile: profile
};
}


