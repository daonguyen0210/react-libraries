import React, { useState, useEffect, useLayoutEffect} from 'react'


function LayEf1() {

  const [count, setCount] = useState('undefined')

  useLayoutEffect(() => { 
    // for(let i = 0; i< 4000000; i++){
    //   if( i == 3999999){
    //     console.log('useLayoutEffect')
    //     setCount('useLayoutEffect')
    //   }
    // }
    setTimeout(() => {
      setCount('useLayoutEffect')
    }, 2000);
  }, [])
  

  useEffect( () => { 
    setTimeout(() => {
      setCount('useEffect1')
    }, 3000);

    setCount('useEffect0')
  
  }, [])

  return (
    <div >{count}</div>
  )
}

export default LayEf1
