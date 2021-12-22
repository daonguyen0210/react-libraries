// import member of the current file, we use the brackets
import { BUY_CAKE} from './cakeTypes'



export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}