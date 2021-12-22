import React, { useState} from 'react'; 
import { ChildA} from './ContextChild';


export const CounterContext = React.createContext();
const CounterProvider = CounterContext.Provider;

const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log('ContextParent render');
  return (
    <div>
      <button onClick={() => { setCount( count + 1)}}>Count - {count}</button>
      <CounterProvider value={count} >
        <ChildA />
      </CounterProvider>
    </div>
  )
}

export default ContextParent
