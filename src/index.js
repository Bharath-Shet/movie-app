import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

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

// export const StoreContext = createContext();
// console.log("StoreContext", StoreContext)


// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

// const connectedAppComponent = connect(callback)(App)

// export function connect(callback){
//   return function(Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe = store.subscribe(() => {
//         this.forceUpdate();
//         })
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render(){
//         const {store} = this.props
//         const state = store.getState();
//         const DataToBePassedAsProps = callback(state);
//         return(
//           <Component {...DataToBePassedAsProps} dispatch={store.dispatch}/>
//         )
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return (
//         <StoreContext.Consumer>
//           {(store) => <ConnectedComponent store={store}/>}
//         </StoreContext.Consumer>
//         )
//       }

//     }
//     return ConnectedComponentWrapper;
//   }
// }
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
  );



