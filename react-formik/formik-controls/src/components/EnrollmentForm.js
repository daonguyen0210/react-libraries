import React from 'react'
import FormikControl from './FormikControl'
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

function EnrollmentForm() {

  const dropdownOpts = [
    { key: "placeholder", value: "Select your course"},
    { key: "React", value: "react"},
    { key: "Angular", value: "angular"},
    { key: "Vue", value: "vue"}
  ]

  const checkboxOpts = [
    { key: "HTML", value: "html"},
    { key: "CSS", value: "css"},
    { key: "JavaScript", value: "javascript"},
  ]

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required(),
    course: Yup.string().required("Required"),
    courseDate: Yup.string().required("Required"),
  })

  const onSubmit = (values) => { 
    console.log("Form values", values);
  }


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        ( formik) => { 
          return (
            <Form >
              <FormikControl control="input" name="email" label="Email" type="email"/>
              <FormikControl control="input" name="bio" label="Bio" type=""/>
              <FormikControl control="select" name="course" label="Course" type="select" options={ dropdownOpts} />
              <FormikControl control="checkbox" name="skillset" label="Skillset" type="" options={ checkboxOpts} />
              <FormikControl control="date" name="courseDate" label="Course Date" type="" />
              <button type="submit" disabled={ !formik.isValid}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default EnrollmentForm

// https://youtu.be/l73kPdY1juk?list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&t=104
