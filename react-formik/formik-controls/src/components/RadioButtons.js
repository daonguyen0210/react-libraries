import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextErr from './TextErr';

function RadioButtons( props) {
  const { label, name, options, ...rest} = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {
          ( props) => { 
            const { field} = props;
            return (
              options.map( (option) => { 
                return (
                  <React.Fragment key={option.key}>
                    <input type="radio" id={option.value} {...field} value={option.value} checked={option.value === field.value}/>
                    <label htmlFor={option.value}>{option.key}</label>
                  </React.Fragment>
                )
              })
            )
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextErr} />
    </div>        
      
  )
}

export default RadioButtons
