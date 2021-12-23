import React, { Component } from 'react'

export class Regcmp extends Component {
    render() {
        return (
            <div>
                Regular component
                {this.props.name}
            </div>
        )
    }
}

export default Regcmp
