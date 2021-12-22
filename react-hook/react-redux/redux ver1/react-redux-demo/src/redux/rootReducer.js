import { combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import UserReducer from './user/UserReducer' 


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: UserReducer,
})

export default rootReducer  

/* 

const initial = 10
khi gọi initial thì giá trị luôn là 10- giá trị mặc đinh(được khởi tạo)-default 
export có 2 loại là "export name" và "export default", 
trong mỗi module thì name: zero or more exporting
                     default: only can have one

khi import mà chưa cần import một apart cụ thể thì giá trị default được import và tên của moulde thì  không quan trọng
file: testA.js
    export default k = 12
file: parentA.js
    import m from "./testA" // m = 12

khi import các apart thì có 2 loại export:
    +, export before: export const testA= {...}
    +, export end: export cuối file: export { testA, testB, testC...}


export apart
*export { rootReducer}

export default
*export default rootReducer
*/
