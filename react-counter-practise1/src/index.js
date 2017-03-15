import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

 function counter(value = 0, action){
   switch (action.type){
     case 'INCREMENT':
     return value + 1
   case 'DECREMENT':
     return value - 1
     default:
     return value
   }   
  
}
   let store= createStore(counter) 
   store.subscribe(() => 
    console.log(store.getState())
    )
store.dispatch({type: 'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})



ReactDOM.render(
  <Provider store={store} >
  <div>
  <App />
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
