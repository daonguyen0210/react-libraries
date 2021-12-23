import React, { Component } from 'react'
import HOrderCmp from './HOrderCmp'

class HOrderTwo extends Component {
    

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            </div>
        )
    }
}

export default HOrderCmp(HOrderTwo)
