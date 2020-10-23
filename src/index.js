import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers/index'

// sets the state of the created store as the def passed in the movies function
const store = createStore(movies);
// console.log('store : ',store);
// console.log('State BEFORE :',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: "Superman"}]
// })
// console.log('State AFTER :',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


