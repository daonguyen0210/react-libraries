import React from 'react'
import { connect} from 'react-redux'
import { buyCake} from '../redux'



function CakeContainer(props) {


    return (
        <div>
            <h2 >Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

/* 
the store is not immutable, that means it can be modified by anyone, so the value trieve in plain object is broken,  to fix the bug will get many time to fix, to improve for the maintance, we should use selector
selector is only a function, what get the state as argument and return the value of the state.
*/
// selector
const selectNumCakes = (state) => {
  return state.cake.numOfCakes;
}

/* 
the new WRAPPER COMPONENT will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object( the object only has the property, which has a pair of keys and values), which will be merged into the wrapped component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
*/
// mapStateToProps
const mapStateToProps = (state) => {
  return {
    numOfCakes: selectNumCakes(state),
  }
}
/* mapDispatchToProps is used for dispatching action to the store
with React-Redux, the component cant never access the store directly- the connect() can do it
React-Redux gives two ways to let components dispatch an action
+, a connected component can props.dispatch action itself
+, connect() accept the argument as mapDispatchToProps, which lets us create functions that dispatch when called, and pass those functions as props to our components */

const mapDispatchToProps = (dispatch) => {
  // return the plain object
  return {
    buyCake: () =>  dispatch( buyCake()),
  }
}

/* the connect() function connect the react component and redux store
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a NEW WRAPPER COMPONENT, connected component class that wraps the component you passed in.

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
*/
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
