import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const   FormikContainer = () => {

  const initialValues = {
    email: "",
    description: "",
    select: "",
    radio: "",
    checkbox: [],
    birthDate: null
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid").required("Required"),
    description: Yup.string().required("Required"),
    select: Yup.string().required("Required"),
    radio: Yup.string().required("Required!"),
    checkbox: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => { console.log("values", values)};

  const selectOptions = [
    {key: "placeholder", value: "Choose a topic"},
    {key: "opt1", value: "Facebook"},
    {key: "opt2", value: "Instagram"},
    {key: "opt3", value: "Twitter"},
    {key: "opt4", value: "Github"},
  ]

  const radioOptions = [
    {key: "option1", value: "rOption 1"},
    {key: "option2", value: "rOption 2"},
    {key: "option3", value: "rOption 3"},
    {key: "option4", value: "rOption 4"},
  ]

  const checkboxOptions = [
    {key: "option1", value: "cOption 1"},
    {key: "option2", value: "cOption 2"},
    {key: "option3", value: "cOption 3"},
    {key: "option4", value: "cOption 4"},
  ]

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {/* funtion as children component */}
      {
        (formik) => (
          <Form >
            <FormikControl control="input" type="email" label="Email" name="email"/>
            <FormikControl control="textarea" type="text" label="Description" name="description" />
            <FormikControl control="select" type="select" label="Select a topic" name="select" options={selectOptions}/>
            <FormikControl control="radio" type="check" label="Check an option" name="radio" options={radioOptions} />
            <FormikControl control="checkbox" type="check" label="Checkbox topic" name="checkbox" options={checkboxOptions} />
            <FormikControl control="date" label="Pick a date" name="birthDate " />
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormikContainer

// https://youtu.be/-cdJLeu7CRA?list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&t=24
