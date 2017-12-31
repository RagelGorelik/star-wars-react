import 'whatwg-fetch';
import {API_URL} from "./constants.js"
const ls = require('localstorage-ttl');
const assign = Object.assign;
class DataFetcher {
    getCharacter(i){
        return this.get(API_URL+'people/'+i)
            .then(character=>{
                if(character == -1)
                    return Promise.resolve(()=>null);
                character.id = i;
                return Promise.all([
                    this.getPlanet(character.homeworld),
                    this.getSpecie(character.species[0])
                ]).then(arr=>({character, planet: arr[0], spec: arr[1]}));
            })
    }
    getPlanet(i){
        let u = API_URL+'planets/'+i;
        if(isNaN(+i)) // full url passed?
            u = i;
        return this.get(u).then(p=>assign(p, {id: i}));
    }
    getSpecie(u){
        if(!u)
            return Promise.resolve('n/a')
        return this.get(u);
    }
    get(u){
        let val = ls.get(u);
        if (val){
            return Promise.resolve(val);
        }
        return fetch(u).then(response=>{
            if (response.status===200)
                return response.json();
            throw('cannot get data for '+url);
        }).then(j=>{
            ls.set(u, j);
            return j;
        }).catch(e=>{
            ls.set(u, -1);
            return -1;
        });
    }
}
export default DataFetcher;
