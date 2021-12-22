import React, { useContext} from 'react';
import { CounterContext} from './ContextParent'

export const ChildA = () => { 
  console.log('ChildA render');
  return (
    <React.Fragment >
      <div >Child A</div>
      <ChildB />
    </React.Fragment>
  )
}

export const ChildB = () => { 
  console.log('ChildB render');
  return(
    <React.Fragment >
      <div >Child B</div>
      <ChildC />
    </React.Fragment>
  )
}

export const ChildC = () => { 
  console.log("ChildC render");
  const count = useContext(CounterContext);
  return (
    <React.Fragment >
      <div >Child C count - {count}</div>
    </React.Fragment>
  )
}