import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextErr from './TextErr';

function DatePicker( props) {
  const { label, name, ...rest} = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
          ( props) => { 
            const { field, form} = props;
            const { setFieldValue } = form;
            const { value } = field;
            return <DateView id={name} {...field} {...rest} selected={value} onChange={(val) => { setFieldValue(name, val)}}/>
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextErr} />
    </div>
  )
}

export default DatePicker
