import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrantionForm() {
  const radioOpt = [
    {key: "Email", value: "emailmoc" /* moc- mode of contact */},
    {key: "Telephone", value: "telephonemoc"},
  ]

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeofContact: "",
    phone: "", 
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""],"Passwords must match").required("Required"),
    modeofContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeofContact", {
      /* we can provide an object literal where the key "is" is value or a matcher function, "then" provides the true schema and/or "otherwise" for the failure condition
      "is" conditions are strictly compared(===) if you want to use a different form of equality you can provide a function like: "is: (value) => value == true"*/
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    })
  })

  const onSubmit = (values) => { 
    console.log("Form data", values); 
  }

  return (
    <Formik initialValues={ initialValues} validationSchema={ validationSchema} onSubmit={ onSubmit }>
      {
        ( formik) => { 
          return (
            <Form >
              <FormikControl control="input" name="email" label="Email" type="email" />              
              <FormikControl control="input" name="password" label="Password" type="password" />
              <FormikControl control="input" name="confirmPassword" label="Confirm Password" type="password"/>
              <FormikControl control="radio" name="modeofContact" label="Mode of Contact" type="" options={ radioOpt} />
              <FormikControl control="input" name="phone" lable="Phone" type=""/>
              <button type="submit" disabled={ !formik.isValid}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default RegistrantionForm


/* 
mixed.oneOf(arrayOfValues: Array<any>, message?: string | function): Schema Alias: equals
Whitelist a set of values. Values added are automatically removed from any blacklist if they are in it. The ${values} interpolation can be used in the message argument.

Note that undefined does not fail this validator, even when undefined is not included in arrayOfValues. If you don't want undefined to be a valid value, you can use mixed.required.
*/