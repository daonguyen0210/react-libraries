import React, { useState} from 'react'

const initState = {
  fname: "john",
  lname: "nguyen",
}

const ObjectUseState = () => {

  const [person, setPerson] = useState(initState);

  const changeName = () => { 
    // person.fname = "paul";
    // person.lname = "kane";
    // setPerson( person); 
    const newPerson = {...person};
    newPerson.fname = "paul";
    newPerson.lname = "kane";
    setPerson( newPerson);
  }

  console.log( "imutable state");
  return (
    <div>
      <button onClick={ changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
