import React from 'react'

function TextErr(props) {

  console.log('TextErr props', props)
  return (
    <div className="errors">
      {props.children}
    </div>
  )
}

export default TextErr
