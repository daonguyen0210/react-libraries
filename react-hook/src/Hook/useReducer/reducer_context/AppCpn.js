import react from 'react';
import React, { useState, useEffect, useReducer } from 'react';
import CpnA from './CpnA';
import CpnB from './CpnB'; 
import CpnC from './CpnC'; 

export const CountContext = React.createContext();

const initialState = 0;
const reducer = ( state, action) =>{
    switch( action){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function AppCpn() {

    const [count, dispatch] = useReducer( reducer, initialState);

    return (
        <CountContext.Provider 
            /* countState equals by current value and the countDispatch will be involked reducer function and pass argurment to the function executes */ 
            value={{ countState: count, countDispatch: dispatch}}
        >
            <div className="AppCpn">
                Count - {count}
                <CpnA />
                <CpnB />
                <CpnC />
            </div>
        </CountContext.Provider>
    )
}

export default AppCpn

