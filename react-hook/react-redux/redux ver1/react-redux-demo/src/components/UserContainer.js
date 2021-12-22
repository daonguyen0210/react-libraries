import React, { useEffect} from 'react'
import { connect} from 'react-redux'
import { fetchUsers} from '../redux'

function UserContainer({ userData, fetchUsers}) {

    /* 
    the parameter {userData, fetchUsers} are only props, normaly we have add like: function UserContainer(props) but on this function, we only want to add exactly two property of props object is { userData, fetchUsers} 
    the parameter has the type is {
        userData: {
            error:...,
            users:...,
            loading:...
        },
        fetchUsers,
    }
    
    */
    useEffect(() => { 
        fetchUsers() //call the props it seems like () => dispatch( fetchUsers())
    }, []) // with the defenceis the useEffect only execute when the component render

    return userData.loading ? (
        <h2 >Loading</h2>
    ) : userData.error ? (
        <h2 >{userData.error}</h2>
    ) :(
        <div >
            <h2 >User List</h2>
            <div>
                {
                    /* đây là cách truy vấn có tồn tại hay không, 
                        exp1 && exp2: if exp1 true => return exp2
                                      if exp1 false => return exp1
                    */
                    userData && 
                    userData.data &&
                    userData.data.map( (user) => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

function mapStateToProps( state){
    return {
        /* the state is the root state so the 'user' is the property and it will return the return of the userReducer 
        
        the .user is the property of the object state in rootReducer file*/
        userData: state.user
    }
}

function mapDispatchToProps( dispatch){
    return {
        fetchUsers: () =>  dispatch( fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
