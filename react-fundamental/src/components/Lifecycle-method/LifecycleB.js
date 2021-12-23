import React, { Component } from 'react'

export class LifecycleB extends Component {
    

    constructor(props){
        super(props);

        this.state = {
            name: 'chichchoe',
        };

        console.log('constructor-A')

    }

    static getDerivedStateFromProps( props, state){
        console.log('lifecycleA getderivedstatefromprops'); 
        return null;
    }

    componentDidMount(){
        console.log('lcB componentDidMount');
    }
    

    render() {
        return (
            <div>
                console.log('lcB render');
            </div>
        )
    }
}

export default LifecycleB
