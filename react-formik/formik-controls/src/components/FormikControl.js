import React from 'react'
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import Input from './Input';
import RadioButtons from './RadioButtons';
import SelectOpt from './SelectOpt';
import Textarea from './Textarea';

function FormikControl( props) {

  const { control, ...rest} = props

  switch( control){
    case "input": return <Input {...rest}/>
    case "textarea": return <Textarea {...rest} />
    case "select": return <SelectOpt {...rest} />
    case "radio": return <RadioButtons {...rest} />
    case "checkbox":  return <Checkbox {...rest} />
    case "date": return <DatePicker {...rest} />
    default: return null;
  }
}

export default FormikControl
