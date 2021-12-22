import React, { useState, useEffect, useReducer } from 'react';


/* useReducer is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.

The dispatch function takes an action, and calls the reducer to update the state.*/
const initialState = () =>{
    firstCounter: 0;
};
const reducer = (state, action) => {
    /* when dispatch is called, it will call reducer function and passes argurments to the action */
    /* now we have 'state = ...count' */
    switch( action.type){
        case 'increment':
            /* return value to count */
            return { firstCounter: state.firstCounter+ 1};
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}


function UseTwo() {

    const [count, dispatch] = useReducer( reducer, initialState);

    return (    
        <div>
            Count-{count.firstCounter}
            <button onClick={ () => dispatch(/* this object will be pass as an argurment to the action */{ type: 'increment'})}>Increment</button>           
            <button onClick={ () => dispatch({ type: 'decrement'})}>Decrement</button>
            <button onClick={ () => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    )
}

export default UseTwo
