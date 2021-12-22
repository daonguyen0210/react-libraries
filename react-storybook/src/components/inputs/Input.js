import React from 'react'
import "./Input.css"

function Input( props) {

  const { variant="medium", children, ...rest} = props;
  return (
    <div>
      <input type="input" className={`input ${variant}`} {...rest} placeholder={`${children}`} />
    </div>
  )
}

export default Input
