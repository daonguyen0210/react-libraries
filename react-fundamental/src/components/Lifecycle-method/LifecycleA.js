import React, { Component } from 'react'

export class LifecycleA extends Component {
    

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
        console.log('lcA componentDidMount');
    }
    

    render() {
        return (
            <div>
                console.log('lcA render');
            </div>
        )
    }
}

export default LifecycleA
