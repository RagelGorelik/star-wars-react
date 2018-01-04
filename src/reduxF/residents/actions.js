import DataFetcher from '../../DataFetcher.js';

export const SET_RESIDENTS = 'SET_RESIDENTS';

let fetcher = new DataFetcher;

export let getResidents = (arResidents) =>{
	
return dispatch=>{
  let res = [];
  arResidents.map((url)=>{ res.push(fetcher.getCharacter(url))});
  return Promise.all(res).then((data)=>dispatch&&dispatch(setResidents(data)));
 }
 
}

export function setResidents(residents) {
  return {
    type: SET_RESIDENTS,
    residents: residents
  }
}
