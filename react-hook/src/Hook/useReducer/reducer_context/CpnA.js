
import React, { useState, useEffect, useReducer, useContext } from 'react';
import { CountContext } from './AppCpn'


function CpnA() {
    const countContext = useContext(CountContext); 
    // now typeOf( countContext) = object
    return (
        <div>
            ComponentA
            <button onClick={ ()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={ ()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={ ()=> countContext.countDispatch ('reset')}>Reset</button>
        </div>
    )
}

export default CpnA
