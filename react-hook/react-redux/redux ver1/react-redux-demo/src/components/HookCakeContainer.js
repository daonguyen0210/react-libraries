import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
// import { applyMiddleware } from 'redux'
import { buyCake} from '../redux'

/* 
Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.

*/

/* 
when an action dispatched, the hook useSelector subscribes to the store so the selector function will be invoked, the function will return any type is has because the selector only return the value of the keys.
*/

function HookCakeContainer() {
    /* this is selector function and */
    /* this is selector function-arrow function */
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch  = useDispatch()
    console.log(numOfCakes)
    return (
        <div>
            <h2 >Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => { dispatch( buyCake())}}>Buy Cake</button>
        </div>
    )
}


export default HookCakeContainer
