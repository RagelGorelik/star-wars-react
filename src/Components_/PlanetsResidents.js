import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {residents} from '../reduxF/residents/actions'
import{ getResidents} from'../reduxF/residents/actions'

export const Residents = ({getResidents,residents}) => {
  console.log("from Component",residents);
document.title = 'Star Wars Residents';
let arr = residents.filter(c=>c.character);
if(arr.length>0){
  return (

<div className='container'>
<div className='row'> 
<div id='character-list'>
  <h1>Planets Residents</h1>
  <ul>
  arr.map(i=>
    <li>
    {i.character.name}</li>
               
  )</ul>

  <p>hello{arr.length}</p>
  <p>{arr[0].character.name}</p>
  
  
</div>
</div>
</div>)}
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
