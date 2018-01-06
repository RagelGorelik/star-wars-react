import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {residents} from '../reduxF/residents/actions'
import{ getResidents} from'../reduxF/residents/actions'

export const Residents = ({getResidents,residents}) => {
  console.log("from Component",residents);
document.title = 'Star Wars Residents';

if(residents && residents.draw && residents.data.length>0){
  let arr = residents.data.filter(c=>c.character);
  return (

<div className='container'>
<div className='row'> 
<div id='character-list'>
  <h1>Planets Residents</h1>
  <ul>
  {arr.map(i=>
    <li key={i.character.id}>
    {i.character.name}</li>               
  )}</ul>
  
  
</div>
</div>
</div>)}
  else if(residents.draw === true)return (
    <div><p>No resident lives here</p></div>);
  else return null;
}


const mapStateToProps = ({ residents }) =>({
    residents
});
const mapDispatchToProps = dispatch=>({

  setResidents(residents){
    return ()=>dispatch(getResidents(residents));
  }
})

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Residents));
