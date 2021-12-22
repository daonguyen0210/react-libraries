/* 
the package: the folder with many modules, always are used by User, and they dont want to import all the modules with many lines, 
to solve that the problem, re-export will IMPORT all the modules into a file and EXPORT them as a new name or from a directly url, so the User can import with the another name
thats called re-export in ES6
the syntax: export {...} from ...  */ 

export { buyCake} from './cake/cakeAction'
export { buyIceCream} from './iceCream/iceCreamAction'
export * from './user/UserAction'



