import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'
import { routes } from './route'
import App from './Components_/App.js';
import reducer from './reduxF';
import { getCharacterPlanet } from './reduxF/characterPlanetSet/actions.js';
import { getPlanets } from './reduxF/planets/actions.js';
import {LIST_SIZE, LOOK_AHEAD} from './constants.js'

require('./index.html');

// Create redux store and use
/* Redux Thunk middleware allows to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
The inner function receives the store methods dispatch and getState as parameters.*/
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Kick off things by getting the first set characters
store.dispatch(getCharacterPlanet(1, LIST_SIZE+LOOK_AHEAD));

// Create app
const container = document.querySelector('#app-container');

// Render app, wrap the app with router
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
       <Router history={hashHistory} routes={routes}>
         <App />
       </Router>
    </Provider>
  </AppContainer>
  , container
);

// hot loading
if (module.hot) {
  module.hot.accept('./Components_/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
// Kick off things by getting the first set characters
//and only after that call warmUpCache
store.dispatch(getCharacterPlanet(1, LIST_SIZE+LOOK_AHEAD))
.then(console.log("First time I get CharPlanet"))
.then (() => {store.dispatch(getPlanets(1, LIST_SIZE+LOOK_AHEAD))})
.then(console.log("First time get planets"))
.then (() => {warmUpCache(getCharacterPlanet, LIST_SIZE+LOOK_AHEAD+1, 'character');
  warmUpCache(getPlanets, LIST_SIZE+LOOK_AHEAD+1)})


//because of charplanet is ar with 2 objects I need check key and do c.dataKey 
const warmUpCache = (getter, start, dataKey)=>{
    getter(start, start+LIST_SIZE)().then(arr=>{
        arr = arr.filter(c=>dataKey ? c[dataKey] : c && c!=-1);
        if (!arr.length)
            return;
        let last = arr.reduce((a, c)=>dataKey ? 
                (c[dataKey].id>a ? c[dataKey].id : a) : 
                (c.id>a ? c.id : a), 
            -Infinity);
        warmUpCache(getter, last+1, dataKey);
    })
}

