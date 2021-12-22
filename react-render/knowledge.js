/* 
? what is render
  _when we run react application, the code in components(JSX) are going to translated to react element(it simply is js object). react documentations splits this phase into 2 sub-phases
      _render phase: at the root of the component, react will go downward to the bottom while traversing(di ngang qua) the each of the components. React invokes createElement() method to convert script from JSX to react element( basicaly is JS obj, what describes the structure UI) and stores
      _commit phase: when all components converted, they are applied to the DOM by "react-dom" package

      ? how about re-render
        _ when a flag is setup by component, react will start at the root of the component tree and go downward to find out which component that setup flaged to re-render update data. After that react invokes creatElement() method to convert script, then comparing two compoent( previous - new produced from the last render) then a listed will be made with all the changes to commit to the DOM tree

? what happens when set state to the same value
  _first case: after initial render(old version, react will render twice times), if setter function sets to the same value, react will not re-render  the component
  _second case: when setter function sets to the same value, react will re-render only once again

*/

/* 
! useState hook
  _the setter function from a useState hook will cause the component to re-render
  _the exception is when you update a State hook to the same value as the current state
        _after the initial render? The component will not re-render
        _after re-renders? React will render that specific component one more time 

*/

/* 
! useReducer hook
  _like "useState" hook when re-render, but there is a little distinct. that is "after initial render when dispatch an action to set the same value, react will not re-render"

*/

/* 
! state imutability
  _to compare previous state and current to make a dicision should re-render. React uses Object.is() algorith to compare both of them. so when the state is object, if we change the obj's property and send the obj to Object.is() to re-render. React will not re-render, because it both of state( previous and current) are referent to one instance. so the algorith return true. to avoid the problem, we can create a new obj with the spread syntax to take the property previous obj and change the what we want .
*/

/* 
! Parent - Child Render
  _new state is diffrent from the old state
      React will render as default, when parent render, the child also render too.
  _new state is same as the old state
      _right after intial render
        React will not render 
      _after re-render
        React only render the parent to check. that is set default

  ? how about unnecessary renders
    when a parent compoennt renders, React will recursively render all of its child components
    rendering is not a bad thing as it is how React knows whether it needs to actually make any changes to the DOM.
    "unnecessary renders" where the child component goes through the render phase but not the commit phase. 

  ? how about same element reference
    _in React, when a parent component renders, React will recursively( de quy) render all of its child components.
    _"Unneccessary renders" where the child component goes through the render phase but not the commit phase.
    _we can extract the expensive child component and instead pass it down as props to the parent component
    _whenever there is a re-render caused by a change in the state of the parent component, React will optimise the re-render for your by knowing that the props has to be referencing the same element before and after the render

  ? how about React.memo
    _in React, when a parent component renders, a child component might un-neccessary render
    _to optimize this behavious, we can use React.memo and pass in the child component
    _React.memo will perform a shallow comparison of the previous and new props and re-render the child component on ly if the props have changed

  ? the different between same reference and React.memo
    _same element reference
      when your parent component re-renders because of state change in the parent component
      this technique does not work if the parent component re-renders because of changes in its props
    _react.memo
      when your child component is being asked to re-render due to changes in the parent's state which do not affect the child component props in anyway
    _"shallow comparisons aren't free. they're O(prop count). and they only buy something if it bails out. All comparisons where we end up re-rendering are wasted. why would you expect always comparing to be faster? Considering many components always get different props" 
*/

/* 
! Incorrect React.memo with children
  _when we export a component with React.memo, it means that the component is expensive to execute, and when to be invoked re-render but not to be commit. With React.memo, it only re-renders when the props change, but with the children something occurs
    _if the child component is string(such as "hello hi"), when grandparent re-renders, the child will not re-render
    _if the child component is react element(such as "<strong >Hello</strong>"), when grandparent re-renders, the child will re-render because of passing the react element can change everytime and react have to check and re-render to sure that the child component will be updated if the child component changes, so as behavious default. 

    _when we pass to props an object or function handle to the React.memo component, if its parent re-renders, the react memo also will re-render because when parents re-render that reference to new obj or new funtionc handler. it means the old reference is different with the old reference
! Incorrect memo with props reference
*/