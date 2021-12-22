import React, { useState} from 'react'
import { connect} from 'react-redux'
import { buyCake} from '../redux/index'

function NewCakeContainer(props) {

    const [ number, setNumber] = useState(1)

    console.log( props);

    return (
        <div>
            <h2>New Cake Container - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => { setNumber(e.target.value)}}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

function mapStateToProps(state){
    return{
        numOfCakes: state.cake.numOfCakes
    }
}


function mapDispatchToProps(dispatch){
    return {
        buyCake: (number) => dispatch( buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
