import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextErr from './TextErr';

function SelectOpt( props) {
  const { name, label,options, ...rest} = props;
  return (
    <div className="form-control"> 
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} >
        {
          options.map((option) => { 
            return option.key === "placeholder" ?
                <option key={ option.key} value="">{option.value}</option>:
                <option key={option.key} value={option.value}>{option.value}</option>
          })
        }
      </Field>
      <ErrorMessage name={name} component={ TextErr} />
    </div>
  )
}

export default SelectOpt

