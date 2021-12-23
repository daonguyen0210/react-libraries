import React, { Component } from 'react'
import HOrderCmp from './HOrderCmp'


class HOrderOne extends Component {

        

    render() {

        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}> Clicked {count} times</button>
            </div>
        );
    }
}

export default HOrderCmp(HOrderOne);
