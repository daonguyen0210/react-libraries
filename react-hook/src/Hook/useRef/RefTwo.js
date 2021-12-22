import React,{ useState, useEffect, useRef} from 'react'

function RefTwo() {

    const [timer, setTimer] = useState(0);

    const interval = useRef();
    
    useEffect( () => {
        interval.current = setInterval(() => {
            setTimer( prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval( interval.current);
        }
        
    });



    return (
        <div>
            Timer - {timer}  
            <button onClick={() => { clearInterval( interval.current)}}>Clear Timer</button>      
        </div>
    )
}

export default RefTwo
