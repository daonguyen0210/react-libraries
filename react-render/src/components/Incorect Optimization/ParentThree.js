import React, { useState} from 'react'
import { MemoChildFour } from '../Optimization/ChildFour';
import ChildThree, { MemoChildThree } from './ChildThree'


const ParentThree = (props) => {
  const { children} = props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karol');
  console.log('ParentThree render');
  return (
    <div>
      <button onClick={() => { setCount(count + 1 )}}>Count - {count}</button>
      <button onClick={() => { setName("Wojtyla")}}>Change name - {name}</button>
      <MemoChildFour name={name} />
        {/* Hello
      </MemoChildFour> */}
    </div>
  )
}
export default ParentThree




