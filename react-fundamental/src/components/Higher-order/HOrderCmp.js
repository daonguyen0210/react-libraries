import React, { Component } from 'react';

/* Higer-order component is simply function which will add more props or subfunctionality and return */

const UpdatedCmp = (OriginalCmp) => {

    
    class NewCmp extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0,
            }
        }
        
        incrementCount = () => {
            this.setState( (prevCount) => {
                return {count: prevCount.count + 1}
            })
        }

        render() { 
            return <OriginalCmp count={this.state.count} incrementCount={this.incrementCount} />;
        }
    }
     
    return NewCmp;
}

export default UpdatedCmp;