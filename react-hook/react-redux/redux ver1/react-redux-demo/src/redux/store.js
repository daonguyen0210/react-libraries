
// import createStore packages from redux library
import { createStore, applyMiddleware} from 'redux' 
import { composeWithDevTools} from 'redux-devtools-extension' 
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'



/* when the dispatch an action to approach the Reducer, it will execute something such as 
    +, logging: every action goes through this middleware, so we can log its type and payload for debugger or tracking purposes
    
    +, Error tracking: if any asynchronous action returned an error, this middleware can display a notification
    
    +, caching: only call your API for the same action once, and cache the result for future calls
    
    +, auth requests: for API calls, apply an authentication token before sending out the request
*/
// a reducer is a function what return the next state of the app
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
 