import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {LIST_SIZE, LOOK_AHEAD} from '../constants.js';
import { getPlanets } from '../reduxF/planets/actions';
import Pager from '../reduxF/paginator.js';
import LoadingState from '../Components_/LoadingState'
import {getResidents} from '../reduxF/residents/actions'
import Residents from '../Components_/PlanetsResidents.js'

export const planets = ({planets, getResidents,setPrevPage, setNextPage}) => {
document.title = 'Star Wars Planets';
let arr = planets.filter(c=>c.name);
let cont = arr.splice(LIST_SIZE);
let firstIndex = arr.reduce((a, c)=>
    c.id<a ? c.id : a, Infinity);
return (
<div className='container'>
<div className='row'> 
<LoadingState loading ={ planets.length ==0}/>
<div id='character-list'>
  <h1>Home Planets</h1>
  <table className = "table table-hover">
    <thead>
      <tr>
        <th>Name</th><th>Terrain</th><th>Population</th><th>Residents</th>
      </tr>
    </thead>
    <tbody>
    {arr.map((p, i)=>
      <tr key = {i}>
        <td>{p.name}</td>
      <td>
        {p.terrain}
      </td>
      <td>
        {p.population}
      </td>
      <td><button type="button" className="btn btn-primary" onClick={getResidents(p.residents)}>Show residents</button></td>
    </tr>
    )}
    </tbody>
  </table>
</div>
<Pager next={cont.length ? setNextPage(firstIndex) : undefined}
  prev = {setPrevPage(firstIndex)}/>
</div>
</div>)
}

const mapStateToProps = ({ planets }) =>({
    planets
});
const mapDispatchToProps = dispatch=>({

  getResidents(residents){
    return ()=>dispatch(getResidents(residents));
  },
    setPrevPage(currentFirst){
        if(!currentFirst || currentFirst==1)
            return;
        let prev = currentFirst-LIST_SIZE;
        if (prev < 1)
            prev = 1;
        return ()=>dispatch(getPlanets(prev, prev+LIST_SIZE+LOOK_AHEAD));
    },
    setNextPage(currentFirst){
        if(!currentFirst)
            return;
        let next = currentFirst+LIST_SIZE;
        // stop searching for next item if there is a gap in more than LOOK_AHEAD
        return ()=>dispatch(getPlanets(next, next+LIST_SIZE+LOOK_AHEAD));
    },
})

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(planets));
