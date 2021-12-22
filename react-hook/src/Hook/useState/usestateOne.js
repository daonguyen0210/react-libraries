
import React, { useState } from 'react';


const Usestate = () => {
    // /* with the first values of 'values' is value what is in the right pattern*/
    // const [values, handleChange] = useForm({ email: '', value: ''});

    // /* after useForm we have 
    //     handleChange = e => ....
    // */

    // return (
    //     // values is object, what has 2 properties is email vand password
    //     <div>
    //         <input 
    //             name="email"
    //             value={ values.email}
    //             onChange={ handleChange}
    //         />
    //         <input 
    //             type="password"
    //             name="password"
    //             value={ values.password}
    //             onChange={ handleChange}
    //         />
    //     </div>
    // );

    const [value, setValue] = useState(0);

    
    let handleIncreament = () =>{
        for( let i= 0;i < 5;i ++){
            setValue( prevValue => prevValue + 1);
        }
    }
    return (
        <div>
            {value}
            <button onClick={handleIncreament}>Increament</button>
        </div>
    );
};

export default Usestate;

