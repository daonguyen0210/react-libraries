import React, { Component } from 'react'
import { UserConsumer} from './userContext'

class CmpF extends Component {

    

    render() {
        return (
            <UserConsumer>
                {(username) => {
                    return <div>hello {username} </div>
                }}
            </UserConsumer>
        )
    }
}

export default CmpF

