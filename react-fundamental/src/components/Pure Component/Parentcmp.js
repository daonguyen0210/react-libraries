import React, { Component } from 'react'
import Purecmp from './Purecmp'
import Regcmp from './Regcmp'
import Memocmp from './Memocmp'

class Parentcmp extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: 'vscode',
        }

    }


    componentDidMount(){
        setInterval(() => {
            this.setState({ name: ' editor'});
        }, 2000);
    };


    render() {
        return (
            <div>
                Parent Component
                <Memocmp name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcmp
