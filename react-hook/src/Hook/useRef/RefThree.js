import React, { Component, } from 'react'

class RefThree extends Component {

    constructor(props) {
        super(props)
    

        /* React.creatRef() returns a plain object which has only one property is current, typeof(current) === object */
        this.inputText = React.createRef()
        // this.focusInputText = this.focusInputText.bind(this)
    }
    
    focusInputText = () => {
        console.log('line 15', this.inputText.current)
        console.log('line 16', typeof(this.inputText.current))
        console.log('line 17', this.inputText.current.focus())
        this.inputText.current.value = 'I am trigger'
        this.inputText.current.focus()
    }

    render() {
        console.log('ref3 20', this.inputText)
        return (
            <div>
                <input type='text' ref={this.inputText} />
                <input type='button' value='Focus inputText' onClick={this.focusInputText} />
            </div>
        )
    }
}

export default RefThree
