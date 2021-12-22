import React, { useState, useEffect, useReducer } from 'react';


/* useReducer is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.

The dispatch function takes an action, and calls the reducer to update the state.*/
const initialState = 0;
const reducer = (/* there are two value is currentValue and  */state, action) => {
    switch( action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}


function UseOne() {

    const [count, dispatch] = useReducer( reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer( reducer, initialState);

    return (    
        <div>
            <div>Count One-{count}</div>
            <button onClick={ () => dispatch('increment')}>Increment</button>           
            <button onClick={ () => dispatch('decrement')}>Decrement</button>
            <button onClick={ () => dispatch('reset')}>Reset</button>

            <div>
                <div>Count Two-{countTwo}</div>
                <button onClick={ () => dispatchTwo('increment')}>Increment</button>           
                <button onClick={ () => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={ () => dispatchTwo('reset')}>Reset</button>
            </div>

        </div>
    )
}

export default UseOne
