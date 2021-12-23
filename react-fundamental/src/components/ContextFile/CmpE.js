import React, { Component } from 'react'
import CmpF from './CmpF'
import UserContext from './userContext'

class CmpE extends Component {

    
    static contextType = UserContext;
    
    render() {
        return (
            <div>
                component E context {this.context}
                <CmpF />
            </div>
        )
    }
}

/* The contextType property on a class can be assigned a Context object created by React.createContext(). Using this property lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function. */
CmpE.contextType =  UserContext 
export default CmpE

