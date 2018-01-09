import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {residents} from '../reduxF/residents/actions'
import{ setResidents} from'../reduxF/residents/actions'

export const Residents = ({residents, setResidents}) => {
  console.log("from Component",residents);
document.title = 'Star Wars Residents';

if(residents && residents.draw && residents.data.length>0){
  let arr = residents.data.filter(c=>c.character);
  return (

<div className='container'>
<div className ='wrapper'>
<div className = 'profile'>
<button type="button" className="close" aria-label="Close" onClick={setResidents({})}>
  <span aria-hidden="true">&times;</span>
</button>
  <h1>Planets Residents</h1>
  <ul>
  {arr.map(i=>
    <li key={i.character.id}>
    {i.character.name}</li>               
  )}</ul>
  
  
</div>
</div>
</div>)}
  else if(residents.draw === true){
    return (
    <div className ='wrapper'>
    <div className = 'profile'>
    <button type="button" className="close" aria-label="Close" onClick={setResidents({})}>
    <span aria-hidden="true">&times;</span>
    </button>
    <h4>
      No resident lives here</h4>
    </div>
    </div>
    )}
  return null;
}


const mapStateToProps = ({ residents }) =>({
    residents
});
const mapDispatchToProps = dispatch=>({

  setResidents(residents){
    return ()=>dispatch(setResidents(residents));
  }
})

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Residents));
