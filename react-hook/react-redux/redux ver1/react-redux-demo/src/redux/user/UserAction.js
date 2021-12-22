import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './UserTypes'



export const fetchUsersRequest = () => { 
    return {
        type: FETCH_USERS_REQUEST
    }
}

/* the payload is an optional property that contains some data that is required to perform any particular task */
export const fetchUsersSuccess = (users) => { 
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

export const fetchUsersFailure = (error) => { 
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => { 
    return (dispatch) => { 
        dispatch( fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (resp) => { 
                // console.log('line 35 userAction', resp.data)
                const users = resp.data
                dispatch( fetchUsersSuccess( users))
            })  
            .catch( (err) => { 
                const error = err.message
                dispatch( fetchUsersFailure( error))
            })
    }
}