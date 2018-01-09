import React from 'react';
import { connect } from 'react-redux';
import { setCharacterProfile
 } from '../reduxF/character/actions';

 
const CharacterProfile = ({profile, setCharacterProfile}) => {
    if (profile.character){
        let character = profile.character;
        let spec = profile.species;
        let planet = profile.planet;
        return (
        <div className ='wrapper'>
            <div className = 'profile'>
                  {character.name && planet.name && 
                    <p>{character.name} comes from {planet.name}</p>}
                  {spec.name && <p>{character.name} is {spec.name}</p>} 
                  {<p>Additional Information</p>}
                  {character.height && <p>height: {character.height}</p>}
                  {character.mass && <p>mass: {character.mass}</p>}
                  {character.hair_color && <p>hair color: {character.hair_color}</p>}
                  {character.eye_color && <p>eye color: {character.eye_color}</p>}
                  {character.birth_year && <p>birth year: {character.birth_year}</p>}
                  {character.gender && <p>gender: {character.gender}</p>}
                <button type='button' className='btn btn-danger pull-right' id='prof_btn'
                  onClick={setCharacterProfile({})}>close</button>
              </div>
              </div>
              )
    }
    return null;
}
export function mapDispatchToCharacterProps(dispatch){
  return {
        setCharacterProfile(profile){
            return()=>dispatch(setCharacterProfile(profile))
        }
  }
}  
const mapStateToProp = ({ character: { profile } }) =>({
    profile,
});

export default connect(mapStateToProp, mapDispatchToCharacterProps)(CharacterProfile);
