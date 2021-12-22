import React, { useState } from 'react';

function UsestateThree() {
    const [items, setItems] = useState([]);



    const handleAddItem = () =>{
        setItems( [ ...items, {
            id: items.length,
            value: Math.floor( Math.random()* 10 + 1) 
        }])
    }

    return ( 

        <div>

            <button onClick={handleAddItem}>Add a number</button>
            <ul>
                {
                    items.map( item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    );
}

export default UsestateThree;