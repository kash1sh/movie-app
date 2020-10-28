import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index'

const logger = ({dispatch,getState}) => (next) =>(action) =>{
  next(action);
}

// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action == 'function')
//   {
//     action(dispatch);
//     return;
//   }
    

//     next(action);
// }
// sets the state of the created store as the def passed in the movies function
const store = createStore(rootReducer,applyMiddleware(logger,thunk));

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: "Superman"}]
// })

// export const StoreContext = createContext();

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (
//     <StoreContext.Provider value = {store}>{this.props.children}</StoreContext.Provider>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
    ,
   </React.StrictMode>,
  document.getElementById('root')
);


