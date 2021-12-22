import React from 'react'
import { connect} from 'react-redux'
import { buyCake, buyIceCream} from '../redux'

function ItemContainer(props) {

    return (
        <div>
            <h2 >Item - {props.numItem}</h2>
            <button onClick={ () => { props.buyItem()}}>Buy Cake</button>
        </div>
    )
}


// ownProps are JUST PROPS you pass TO the COMPONENT FROM the PARENT component.
function mapStateToProps( state, ownProps) {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream

    return {
        numItem: itemState,
    }
}


function mapDispatchToProps( dispatch, ownProps){
    const itemProp = ownProps.cake ? () =>  dispatch( buyCake()) : () =>  dispatch( buyIceCream())
    return {
        buyItem: itemProp
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
