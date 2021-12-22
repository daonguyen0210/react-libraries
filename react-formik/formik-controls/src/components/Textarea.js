import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextErr from './TextErr';

function Textarea(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} control="textarea" {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextErr} />
    </div>
  );
}

export default Textarea;
