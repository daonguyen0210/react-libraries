import React, { useState} from 'react'

function Parent() {

    let pro = new Promise( (result, reject) => {
        setTimeout(()=> {
            result('i am done')
        }, 500);
    })

    const [age, setAge] = useState(0);
    const [add, setAdd] = useState(0);

    let incre5 = ()=>{
        for( let i = 0;i < 5 ; i++){
            setAge( age + 1);  //=>  chỉ tăng lên 1 sau render
        }
    }
    
    let incre10 = ()=>{
        for( let i = 0;i < 10;i ++){
            setAdd( prevAdd => {
                return ( prevAdd + 1);
            }); //tăng 10 sau render
            
            pro.then( result => console.log(result));
        }
    }


    return (
        <div>
            <button onClick={incre5}>Add 5 - {age}</button>
            <button onClick={incre10}>Add 10 -{add}</button>
        </div>
    )
}

export default Parent
