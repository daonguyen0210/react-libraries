/* TODO: USE REDUX  
import redux, { createStore, applyMiddleware, combineReducers} from "redux" 
import { reduxLogger} from "redux-logger"


const applyMiddleware = redux.applyMiddleware

cmt: create store from redux library

cmt: every time when dispatch will be called redux-logger will log in console information about action and state 
const logger = reduxLogger.createLogger()


const rootReducer = combineReducers( { cake: cakeReducers, iceCream: iceCreamReducers})
const store = createStore(  rootReducer, applyMiddleware( logger  ));
const unsubscribe = store.subscribe(() => console.log("updated state ", store.getState());
*/


/* what is Redux
? what is redux
  _it is library used for JS applications
    +that means it is not tied to Reat, can be used with React, Angular, Vue or even vanilla Js
  _it stores the state of our application:
    +state of an app is the state represented by all the individual components of that app
    +redux will store and manage the application state
  _it is predictable
    +all state transitions are explicit and it is possible to keep track of them 

? three core concepts
  _store
    +it is plain JS object, what means store is object and only hold properties not holds method
    +it is object what holds the state of the application
  _action
    +it is a plain JS object that has a "type" field what describes something that happened in the application
    +the "type" field should be a string that gives this action a description name such as "todos/todoAdded"
    +an action object can have other fields with additional information about what happened. by convention( theo quy uoc), we puth that information in a field called "payload"
      .i.e. 
        const addToDoAction = {
          type: "todos/todoAdded",
          payload: "buy milk"
        }
  _reducers
    +is a function that receives the current "state" and "action" arguments, depends on "action.type" to update the state if nescessary
    +reducers must always follow some speciffic rules:
      .they should only calculate the new state value based on the "state" and "action" arguments
      .they are not allowed to modify the existing "state". instead, they must make immutable updates, by copying the existing "state" and making changes to the copied values.
      .they must not do any asynchronous logic, calculate random values, or cause other "side effects"
        .i.e. 
          const initialState = { value: 0}
          function counterReducer( state = initialState, action){
            if( action.type === "counter/incremented"){
              return {
                ...state,
                value: state.value + 1
              }
            }
            return state;
          }

  _dispatch
    +they only way to update the state is to call store.dispatch() and pass in an action object. the store will run its reducer function and save the new state value inside, and we can cal getState() to retrieve the updated value:
        .i.e. 
          store.dispatch({ type: "counter/incremented"})
          console.log( store.getState())
  
? what are three principles
  _1st
    +the state of our whole application is stored in an object tree within a single store

  _2nd
    +the only way to change the state is to emit an action, an object describing what happened
  _3rd
    +to specify how the state tree is transformed by actions, we write pure reducers

    
    ? what is subscribe method from store
    cmt: const unsubscribe = store.subscribe(() => { console.log("something")})
    _whenever the dispatch() method invoked, we want to make some "side effects" to notify or change something, we can add listener by calling subscribe methed, it returns subscribe
    _to unsubscribe we can can unsubscribe method what returned from calling subscribe method. 
    
    ? what is combineReducer method from redux
    cmt: const combineReducers = redux.combineReducers
    cmt: const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer})
    _what happens if our reducer has many case to handle, how about seprating independent reducer and store to handle when dispatch an event, the problem at that time is

? what is "Middleware"
  _is the suggested way to extend redux with custom functionality
  _provides a third-party extension between dispatching an action, and the moment it reaches the reducer
  _the Middleware maybe logger or thunk
      .i.e.
          .import logger from "redux-logger"
          .import { createStore, applyMiddleware} from "redux"
          .const store = createStore(reducer, applyMiddleware(logger))
          

? what is "redux-thunk"
  _the word "thunk" is a programming term that means "a piece of code that does some delayed work"
  _acts as middleware that return we a function instead of an object while calling through the action creators. the returned fucntion erceives the dispatch method form the store and then later it is used to dispatch synchonouly inside the body of function once the asynchronous actions have been completed. 
      .i.e.
          .import thunkMiddleware from "react-thunk"
          .import { createStore, applyMiddleware} from "redux"
          .const store = createStore( reducer, applyMiddleware( thunkMiddleware))
  _a "thunk function" is a function that accepts two arguments: the Redux store "dispatch" method, and the Redux store "getState" method. thunk functions are not directly called by application code. instead, they are passed to store.dispatch()
      .i.e.
          .const thunkFunction = (dispatch, getState) => { 
              cmt: logic here that can dispatch actions or read state 
          .}

          .store.dispatch( thunkFunction)
*/


