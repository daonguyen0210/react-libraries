import React, { useState} from 'react'
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log('render');
  return (
    <div>
      <button onClick={() => { setCount(count + 1 )}}>Count - {count}</button>
      <button onClick={() => { setCount(0)}}>Count - 0</button>
      <button onClick={() => { setCount(5)}}>Count - 5</button>
      <Child />
    </div>
  )
}
export default Parent


