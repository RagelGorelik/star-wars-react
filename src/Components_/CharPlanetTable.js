import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { setCharacterProfile
 } from '../reduxF/character/actions.js';
import { getPlanets, 
 } from '../reduxF/planets/actions.js';
import Pager from '../reduxF/paginator.js';
import { getCharacterPlanet, mapDispatchToCharacterProps 
} from '../reduxF/characterPlanetSet/actions.js';
import {LIST_SIZE} from '../constants.js';

const charPlanetTable = ({setPlanets, charPlanet, setCharacter, setNextPage,
    setPrevPage})=>{
document.title = 'Star Wars Characters';
let arr = charPlanet.filter(c=>c.character);
let cont = arr.splice(LIST_SIZE);
let firstIndex = arr.reduce((a, c)=>
    c.character&&c.character.id<a ? c.character.id : a, Infinity);
if (!charPlanet.length)
    return <div><h1>Loading...</h1></div>
return (
<div>
<div id ='character-list'>
  <h1>Star Wars Characters</h1>
  <table className = "table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th><Link to='/planets'>Home planet</Link></th>
      </tr>
    </thead>
    <tbody>
      {arr.map((c, i)=>
      <tr key={i}>
        <td onClick = {setCharacter(c)} role ='button'>
          {c.character.name}
        </td>
        <td>
          {c.planet.name}
        </td>
      </tr>)}
    </tbody>
  </table>
</div>
<Pager next={cont.length ? setNextPage(firstIndex) : undefined}
  prev={setPrevPage(firstIndex)}/>
</div>)
}

const mapStateToProps = ({charPlanet})=>({charPlanet});

export default withRouter(connect(mapStateToProps,
    mapDispatchToCharacterProps)(charPlanetTable));
