/*  

TODO: useEffect:
?   what is side effect
    in the React has a type of function call 'pure function', it only the function take in the arguments, calculate depended solely in the argument and return the value. Nothing else happens upon executing the function.
    
    side-effect is anything that effects outside of the scope such feching data, access to the DOM, using timmer function setTimeout(), ...

*   the component rendering and side-effect logic are independent. it would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute to output => useEffect() will do it for you.

! useEffect(callback[, dependecies])
*   callback is the func containing the side-effect logic. callback is EXECUTED right after changes were being pushed to DOM.
*   dependencies is an optional array of dependincies. callback only executed if the dependecies have changed between rederings.


?   side-effect cleanup
    sometimes side-effects need cleanup: close a socket, clear timers.
*   if the callback function RETURNS A FUNCTION then useEffect() considers this as an effect cleanup.
    Cleanup works the following way:
        A, After initial redering and mounting, useEffect invokes the callback having the side-effect. cleanup function is not invoked.

        B, on later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution( to clean up  everything after the previus side-effect), then runs the current side-effect.

        C, finally, after unmounting the component, useEffect invokes the cleanup function from the lastest side-effect
    
!   this hook is asynchronous because it does not execute all of the code within the hook, with the side-effect cleanup, it executed with the changing of the dependencies.




TODO: useRef
  ! const reference = useRef(initialState)
    _useRef return an object what only have a "current" property what hold the muatable value or the reference of DOM nodes/React element
    ? what is reference
      _reference( tham chieu) "IS A COPIED" of the orginal object and "DEPENDING ON CHANGING" of the original object, it also can change property of orginal <object data="" type="" className=""></object>
    _there are 2 rules to remember about references:
      + the value of the reference is persisted(stays the same) between component re-renderings
      + updating a reference doesn't trigger a component re-rendering.
    _there are two main uses of useRef:
      + access the DOM nodes or React element
      + keep a mutable variable( have to initial value when declare)
    ? how about accessing DOM nodes/React element
      * i.e. const textInput = useRef(); 
      _when delare useRef() we don't fill intial value for it, react will reference to null
      _at the DOM nodes/React element what we want to access adding the ref={ textInput} at the it's JSX, when rendering react will create a reference and assign it to the textInput is ref attribute, now we can access, modify or add focus to the DOM node/React element
    
        * access the DOM
          {
            ...
            const textInput = useRef(); 
            focusTextInput = () => textInput.current.focus();
            ...
            <input type="text" ref={textInput}/>
            <input type="button" value="Focus" onClick={focusTextInput}/>
          }
    ? how about keeping mutable variable
            {
              ...
              const second =0
              const timerIdRef = useRef(0)
              ...
              timerIdRef.current = setInterval(()=> second+=1, 1000);
            }

TODO: useLayoutEffect
    *   this hook actives like the useEffect but the diffence is this hook- useLayoutEffect will execute after redering phase and before the mounting phase, the React will wait all logic within this hook executed, after that will excute next.


TODO: useContext:
    *   to share data between the components, we often use props method, it is meaning that we have to share key and value with the calling the other component.
            function ApplicationJS(){
                return (
                    <Child_level_1 thisIsProps={'this is value of the pass props'} />
                )
            }
    *   but what happens when we have to pass props through many child_level* this is not hard for React but for the programmer.
    * and when we changing the props, all children of the ApplicationJS will re-render. this is 'props drilling'
    * to avoid make this happen, we can useContext hook, what passes values and any children also can access the data
    * 
    * To do that, we have to declare, provider and customer.
    
    ?   how to declare the context variable
        we have to import the creatContext 
        *   import { createContext} from 'react'
        *   let userContext = createContext();
        at there, we have two 

    ?   how to provider the context to the child component
            userContext.Provider supplies a method to provider the value to all the child component, how deep they are, it also available. with the 'value' property, we can pass anything we want such as obj, arr, primitive to the child component.
        *   ... 
        *   return (
        *       <userContext.Provider value={'this is value is passed to children.'}>
        *           <child_level1 />
        *       </userContext.Provider>`
        *   )
    
    ?   how to cusuming the context
            consuming the context has two ways:
            the first way is use the useContext and it return the value of the context
        *   import { useContext} from 'react'
        *   function child_level1(){
        *       let value = useContext(userContext)
        *       return (
        *           <div >{value}</div>
        *       )
        *   }
          
            the second way is by using a render function supplied as a child context.cusumer special available to on the context instance
        * function child_level1(){
        *     return (
        *         <userContext.Consumer >
        *             { value => <span >{value}</span>}
        *         </userContext.Consumer>
        *     )    

TODO: useCallback
?   why have to use this hook
  _let think about what happen when each re-rendering happens, all the functions within the component will re-create. when re-creating the function, with the function what effect to the state will make the cause of the next re-render. in general, with only one rendering will make many rendering following by the re-create the functions, what within the component
  _to avoid the re-creating the function when the component re-rendering. we use useCallback hook, what have the syntax like the useEffect. when initial render, the React will save the last value of the function to the cache, if the next re-render occurs, the save of function will be used replacing for re-creating the function. if the function wants to be execute, it depends on the dependecies, what indicates which case the function should be re-created.
  _the syntax
        let handleButton = useCallback( () => { 
            setCount( Count + 1)
        }, [count])
        <button onClick={handleButton}>Click me-{count}</button>
        useCallback is a hook that will return a memorized version of the callback function that only changes if one of the dependencies has changes 


*/

/* 
TODO: useMemo
?   what is useMemo
    _let imagine, each re-render we take a value what returns from expensive function when passing to it argument. but when we re-render component with the same argument, the function still re-execute, to memomize the value we can useMemo to handle the issue.
    _the structure of the useMemo is like the useCallback, what takes a callback-function and an array what determines when re-execute function.
*/

/* 
TODO: React.createRef

  ? why to have use createRef
      By default, React does not provide direct access to underlying( basicly) DOM elements. There are several reasons for that. The first one is due to how React's rendering works. During consecutive renders React may reuse existing DOM nodes for performance reasons or create new ones. This means that underlying DOM nodes for a React component may change between renders.
      Another reason is that you may have multiple instances of the same React component on a page. When working with DOM elements we use document.getElementById() function that returns a DOM element by its id. In React, if we'd want to leverage the id property of elements we may end up with multiple HTML elements with the same id. This will cause the document.getElementById() function to return the first element with the specified id which will cause errors in our application.
      All this means that there should be another way to work with DOM elements in React. And this way is using Refs. Let's take a look at how to create Refs and access an underlying DOM nodes.
  _Refs provide a way to access DOM nodes or React elements created in the render method.
      DOM-node là tất cả các thành phần gồm tags và không tags của HTML, hoặc React-elements là các thành phần hiển thị trên UI và được mô tả bởi plain object
  _React.createRef return a plain object and only has a property is current and assign it to the one variable such as 
  _when event is trigger in anything and if it effect to the reference and the callback do something, the result of the callback function will be referenced to the where the ref attribute is attached.
      constructor(props){
          ...,
          this.refer = React.createRef;
      }
      Refs cung cấp một cách đề thao tác trên bất của thành phần nào của DOM nodes( là một plain obj, mô tả các tags của HTML(kể cả comment)) hoặc React-element( là một plain-obj, nó lấy return của component và render thành react_element-react_element, chỉ đởn giản là obj, nơi mô tả phần được hiển thị trên UI) 
      việc tham chiếu đơn giản, bất cứ khi nào một event hay bất cứ gì tác động đến thì chúng ta có thể tham chiếu để tác động đến this.refer.current. việc tham chiếu tới node có thể truy cập được là nhờ thuộc tính current

? why update ref is not trigger re-render
      The value of the ref differs depending on the type of the node:
      When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.
      When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
  _Callback Refs
  _instead of passing a ref attribute created by createRef(), we pass a function. the function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere
      {
        this.textInput = React.createRef();
        ...
        setTextInputRef = element =>{
            this.textInput = element;
        }

        focusTextInput = () =>{
            this.textInput.current.focus();
        }

        <input type="text" ref={this.setInputRef}/>
        <input type="button" value="Focus the text input" onClick={this.focusTextInput}>
      }
  _React will call the ref callback with argument when the component MOUNTs, and call it with noll when it unmounts

  _Refs are guaranteed to be up-to-date before 'componentDidMount' or 'componentDidUpdate' fires
    

TODO: React.Memo
  _React.memo() is higher order component, so we can use it for function component
  _React.memo() only works with function component
  _React.memo() takes in a function component as argument and only re-render component if the props and the state changes.
  _with the child component, it only re-render it the props and state changes, if the child component does not use the props & state so it only render with the first time when initial component.



*/