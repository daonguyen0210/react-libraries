import { BUY_ICECREAM} from './iceCreamTypes'

export const buyIceCream = (numIceCream = 1) => { 
    return {
        type: BUY_ICECREAM,
        payload: numIceCream,
    }
}