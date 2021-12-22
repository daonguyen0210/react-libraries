import React,{ useEffect, useReducer} from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = ( state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            };
        case 'FETCH_ERR':
            return {
                loading: false,
                error: 'Something went wrong!',
                post: ''
            };
        default:
            return state;       
    }
};

function DataFetchingTwo() {
    const [state, dispatch] = useReducer( reducer, initialState);

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( resp =>{
                dispatch({type: 'FETCH_SUCCESS', payload: resp.data})
            })
            .catch( err => {
                dispatch({ type: 'FETCH_ERR', payload: ''});
            });
    });
    return (
        <div>
            {state.loading ? "Loading..." : state.post.title}
            {state.error ? 'Something went wrong!' : null}
        </div>
    )
}

export default DataFetchingTwo
