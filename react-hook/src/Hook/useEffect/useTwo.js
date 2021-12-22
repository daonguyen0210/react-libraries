import React, { useState, useEffect } from 'react';
import Mousehook from './mouseHook';

function UseTwo() {
    const [display, setDisplay] = useState(true);
    
    const handleToggleMouse = () =>{
        setDisplay( !display);

        
    };

    return (  
        <div>
            <button onClick={handleToggleMouse}>Toggle Mouse</button>
            {display && <Mousehook/>}
        </div>
    );
}

export default UseTwo;