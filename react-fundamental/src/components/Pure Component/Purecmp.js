import React, { PureComponent } from 'react'

export class Purecmp extends PureComponent {
    render() {
        return (
            <div>
                Pure component
                {this.props.name}
            </div>
        )
    }
}

export default Purecmp
