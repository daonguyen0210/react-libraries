import React, { useState} from 'react'
import ChildTwo from './ChildTwo'


const ParentTwo = (props) => {
  const { children} = props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karol');
  console.log('ParentTwo render');
  return (
    <div>
      <button onClick={() => { setCount(count + 1 )}}>Count - {count}</button>
      <button onClick={() => { setName("Wojtyla")}}>Change name - {name}</button>
      <ChildTwo name={name}/>
    </div>
  )
}
export default ParentTwo



