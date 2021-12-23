import React, { Component } from 'react'
import FRInput from './FRInput'


class FRParent extends Component {


    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();

    }
    

    handleClick= () => {
        this.inputRef.current.focus();
    }

    render() {
        console.log('rendering FRParent')
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.handleClick}>Focus Me</button>
            </div>
        )
    }
}

export default FRParent
