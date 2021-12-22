import React, { useState, useEffect } from 'react';

function Mousehook() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    let handleMouseMove = e =>{
        setX( e.clientX);
        setY( e.clientY);
    };

    useEffect( ()=>{
        console.log(`x: ${x}  y: ${y}`);
        window.addEventListener('mousemove', handleMouseMove);
        
        return( ()=>{
            console.log('unmouting the mouseHook');
            window.removeEventListener('mousemove', handleMouseMove);
        });
    });


    return ( 
        <div>
            Mouse Position: {x} -{y}
        </div>
    );
}

export default Mousehook;