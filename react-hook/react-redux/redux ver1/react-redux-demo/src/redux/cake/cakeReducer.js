import { BUY_CAKE} from './cakeTypes'





const initialState = {
    numOfCakes : 10,
}

// in the reducer because the state passed to the reducer is preloadedState and is not undefined

const cakeReducer = (/* the State passed to the reducer is preloadedState */state = initialState, action) => {
    switch( action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload,
        }
        /*      
            Redux will populate the parameter state with the current state. The default value is only used if the state is undefined. ie. when you first create the redux state.
            Your current setup should work absolutely fine. 
            the exactly problem why we have to add defaut: return state in switch_case, because when the component render, the nocase is matched so the default will solve the problem when the render, 
            when re-render, always has the case matched, so the default is not need for re-rendering.   
        */
        default: return state;
    }
}

// to export only a single object, function and variable
export default cakeReducer 