import React, { Component } from 'react'
import CmpA from './CmpA'
import CmpB from './CmpB'
import CmpC from './CmpC'
import {UserProvider, UserConsumer} from './userContext'




class ParentCmp extends Component {

    

    render() {
        return (
            <div>
                <CmpA />
                <CmpB />
                <CmpC /> 
            </div>
        )
    }
}

export default ParentCmp
