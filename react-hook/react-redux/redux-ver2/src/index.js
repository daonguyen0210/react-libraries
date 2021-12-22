import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import redux from 'redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

const initialState = {
  numOfCakes: 10,
}

const reducer = (state=initialState, action) => { 
  switch( action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1,
    }

    default: return state; 
  }
}

dispatch( buyCake); */