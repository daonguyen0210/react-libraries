import React from 'react'

const ChildFour = ( props) => {
  const { name} = props;
  const date = new Date();
  console.log("ChildFour Render");
  return (
    <div>
      Hello {name}. it is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  )
}

export const MemoChildFour = React.memo( ChildFour);
export default ChildFour
