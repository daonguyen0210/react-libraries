import React, { Component } from 'react';


import React, { Component } from 'react'

class HorderFour extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState( (prev) => {return {count: prev + 1}});
    }
    

    render() {
        const {count} = this.state;
        return (
            <h2 onMouseOver={this.increment}>Hovered {count} times</h2>
        )
    }
}

export default HorderFour
