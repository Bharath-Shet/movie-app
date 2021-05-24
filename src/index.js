import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import './index.css';

import App from './Components/App';
import rootReducer from './reducers'

// const logger = function({dispatch,getState}) {
//   return function(next){
//     return function(action){
//       console.log('ACTION TYPE', action.type)
//       next(action)
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action) =>{
  //console.log('ACTION TYPE', action.type)
  next(action)
}

const thunk = ({dispatch,getState}) => (next) => (action) =>{
  //console.log('ACTION TYPE', action.type)
  if(typeof action === 'function'){
    action(dispatch)
    return;
  }
  next(action)
}
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

console.log('Store',store)
// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('AFTER STATE', store.getState());

export const StoreContext = createContext();
console.log("StoreContext", StoreContext)


class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
  );



