import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextErr from './TextErr'

const Input = ( props) => {
  const { label, name, type, ...rest} = props
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} type={type} {...rest}/>
      <ErrorMessage name={name} component={ TextErr}/>  
    </div>
  )
}

export default Input

Input.defaultProps = {
  type: "input",
}