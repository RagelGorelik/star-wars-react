import React from 'react';
import { connect } from 'react-redux';
import { setCharacterProfile
 } from '../reduxF/character/actions';
 import { mapDispatchToCharacterProps
 } from '../reduxF/characterPlanetSet/actions'
const assign = Object.assign;

const style_profile_wrap = {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'} 
const style_shadow = assign({backgroundColor: 'black', opacity: 0.4}, style_profile_wrap)
const style_profile_window = {position: 'relative', backgroundColor: 'white', }
const style_profile_body = assign({padding: ' 0 20px 50px 20px'}, style_profile_window)
assign(style_profile_window, {width: '50%', margin: '10% auto', float: 'none'});
 
const CharacterProfile = ({profile, planet, setCharacter}) => {
    if (profile.character){
        let character = profile.character;
        let spec = profile.spec;
        let planet = profile.planet;
        return (
        <div>
          <div style={style_shadow}>
          </div>
          <div style={style_profile_wrap}>
            <div id='character-profile' style={style_profile_window}>
              <div className = 'panel panel-default' id='character_header'>
                <span>{character.name}</span>
              </div>
              <div style={style_profile_body}>
                <div style={{marginBottom: '30px'}}>
                  {character.name && planet.name && 
                    <p>{character.name} comes from {planet.name}</p>}
                  {spec.name && <p>{character.name} is {spec.name}</p>} 
                </div>
                <div>
                  {<p>Additional Information</p>}
                  {character.height && <p>height: {character.height}</p>}
                  {character.mass && <p>mass: {character.mass}</p>}
                  {character.hair_color && <p>hair color: {character.hair_color}</p>}
                  {character.eye_color && <p>eye color: {character.eye_color}</p>}
                  {character.birth_year && <p>birth year: {character.birth_year}</p>}
                  {character.gender && <p>gender: {character.gender}</p>}
                </div>
                <button type='button' className='btn btn-danger pull-right'
                  onClick={setCharacter({})}>close</button>
              </div>
            </div>
          </div>
        </div>)
    }
    return null;
}
const mapStateToProp = ({ character: { profile, planet } }) =>({
    profile,
    planet
});

export default connect(mapStateToProp, mapDispatchToCharacterProps)(CharacterProfile);
