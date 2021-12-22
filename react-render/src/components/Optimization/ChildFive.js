import React from 'react'

const ChildFive = (props) => {
  const { name, person} = props;
  return (
    <div>
      Hello {name} {person.fname} {person.lname}
    </div>
  )
}

export const MemoChildFive = React.memo(ChildFive);
export default ChildFive
