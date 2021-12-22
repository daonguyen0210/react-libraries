import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    // render() function is used to update the UI. For this, you have to create a new element and send it to ReactDOM.render()
    render() {

        const { counters, onReset, onDelete, onIncreament} = this.props;
        
        return (
            <div>
                {/*  The term "props" stands for "properties" and is used for passing data from one component to another. As opposed to state in React, props are read-only. So, the data coming from a parent component can't be changed by the child component. */}

                <button className="btn btn-primary btn-sm m-2" onClick={ onReset}>Reset</button>
                { counters.map( counter => 
                    <Counter key={counter.id} onDelete={onDelete} onIncreament={ onIncreament} counter={counter}>
                        <h3>Counter Child</h3>
                    </Counter>)
                }
            </div>

            
        );
    }
}


export default Counters;


/* useMemo is a higher-order component that will prevent a functional component from being re-render if it's props or state do not change. useMemo is not affect to react hook*/