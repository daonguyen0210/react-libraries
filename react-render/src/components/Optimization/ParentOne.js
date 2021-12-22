import React, { useState} from 'react'

const ParentOne = (props) => {
  const { children} = props;
  const [count, setCount] = useState(0);
  console.log('ParentOne render');
  return (
    <div>
      <button onClick={() => { setCount(count + 1 )}}>Count - {count}</button>
      {children}
    </div>
  )
}
export default ParentOne



