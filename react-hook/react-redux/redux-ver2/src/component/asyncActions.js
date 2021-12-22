import redux, { createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import axios from "axios"


const initialState = {
  loading: false,
  data: [],
  error: "",
}

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAIL    = "FETCH_DATA_FAIL";

const fetchUsersRequest = () => { return { type: FETCH_DATA_REQUEST}}
const fetchUsersSuccess = (users) => { return { type: FETCH_DATA_SUCCESS, payload: users}}
const fetchUsersFail = (error) => { return { type: FETCH_DATA_FAIL, paload: error.message}}


const reducer = (state = initialState, action) => { 
  switch( action.type){
    case FETCH_DATA_REQUEST: return {
      ...state,
      loading: true,
    }
    
    case FETCH_DATA_SUCCESS: return {
      ...state,
      loading: false,
      data: action.payload,
    }

    case FETCH_DATA_FAIL: return {
      ...state,
      loading: false,
      error: action.payload 
    }
  }
} 

function fetchUsers(){
  return function (dispatch, getState){
    dispatch( fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then( (res) => { 
        const users = res.data.map( use => users.id);
        dispatch( fetchUsersSuccess( users))
      })
      .catch( err => { 
        dispatch( fetchUsersFail( err)); 
      })
  }
}

const store = createStore( reducer, applyMiddleware( thunkMiddleware));
const unsubscribe = store.subscribe( () => { console.log(store.getState())})
store.dispatch( fetchUsers());

