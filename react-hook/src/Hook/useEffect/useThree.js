import React, { useState, useEffect } from 'react';

function UseThree() {

    const [count, setCount] = useState(0);

    let tick = () =>{ 
        setCount( prevCount => prevCount + 1);
    };

    useEffect( ()=>{
        // it means by 'componentDidMount'
        let interval = setInterval(tick, 1000);

        // it means by 'componentDidUnmount
        return ()=>{ 
            clearInterval(interval);
        };
    });

    return (  
        <div>
            {count}
        </div>
    );
}

export default UseThree;