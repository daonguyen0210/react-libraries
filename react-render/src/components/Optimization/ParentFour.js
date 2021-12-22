import React, { useState, useMemo, useCallback} from 'react'
import { MemoChildFour } from '../Optimization/ChildFour';
import { MemoChildFive } from './ChildFive';
import ChildFour, { MemoChildFour } from './ChildFour'


const ParentFour = (props) => {
  const { children} = props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karol');
  const person = {
    fname: "karol",
    lname: "woytiwa",
  }

  const handleClick = () => { }
  console.log('ParentFour render');

  const memoziedMemo = useMemo( () => { person}, []);
  const memoziedHandleClick = useCallback( handleClick, []);
  return (
    <div>
      <button onClick={() => { setCount(count + 1 )}}>Count - {count}</button>
      <button onClick={() => { setName("Wojtyla")}}>Change name - {name}</button>
      <MemoChildFive name={name} person={person} />
        {/* Hello
      </MemoChildFour> */}
    </div>
  )
}
export default ParentFour




