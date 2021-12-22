import React, { Component } from 'react'

export class RefOne extends Component {

    interval;

    constructor(props) {
        super(props);

        this.state = {
            timer: 0 
        }

    };

    componentDidMount() {
        this.interval = setInterval( ()=>{
            this.setState( {
                timer: this.state.timer + 1
            })}, 1000);
    };


    
    componentWillUnmount(){
        clearInterval( this.interval);
    };
    


    render() {
        return (
            <div>
                Class timer - { this.state.timer}
                <button onClick={() =>{ clearInterval( this.interval)}}>Clear Timer</button>
            </div>
        )
    }
}

export default RefOne
