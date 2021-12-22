import React, { useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'
import TextErr from './TextErr'

const initialValues = {
  name: '',
  email: '',
  channel: '',  
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumber: ["", ""], 
  phNumbers: [""],
}

const saveValues = {
  name: 'Knae',
  email: 'a@gmail.com',
  channel: 'evodlu',  
  comments: 'hhea',
  address: '121b street',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumber: ["", ""], 
  phNumbers: [""],
}

const onSubmit = (value, onSubmitProps) => { 
  console.log('onSubmit', value);
  console.log('actionSubmit', onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
}

const validate = (values) => { 
    // values.name values.email values.channel
    // error.name error.email error.channel

    console.log('validate line18', values)


    let errors = {}

    if( !values.name){
        errors.name = 'required!'
    }

    if( !values.email) {
        errors.email = 'required!'
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'email invalid'
    }

    if( !values.channel){
        errors.channel = 'required!'
    }

    return errors
}

const validationSchema = Yup.object({
    // the method will cast toString() method of the object, what is created by Yup.object()
    /* 
    *   string.required( message? : string | function): Schema
          with the message is the string that user pass/enter field
          except that empty strings are also considered 'missing' values
    
    *   string.email( message? : string | function): Schema
            validate the values as an email address with a regx
    */
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    // social: Yup.object().shape({
    //   facebook: Yup.string().required('Required'),
    //   twitter: Yup.string().required('Required')
    // }),
})

const validateComments = (value) => { 
  let error = '';
  if( !value){
    error= "Required";
  }
  return error;
}

function YoutubeForm() {
  {/* 
  when using the Formik tag, we have to pass 3 attributes to the tag:
    they are: 
      +,initalValues   	 =>  initialValues for each field, and store the value of the field
      +,validationSchema =>  handling form submission
      +,onSubmit				 =>  validating and handle error messages
  */}
  {/* Form is a small wrapper around an HTML element that automatically hook into Formik's handleSubmit and handeReset */}
    const [formValues, setFormValues] = useState(null)
    return (
      <Formik 
        initialValues={ formValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {
          (formik) => { 
            // console.log("formik props", formik);  
            return (
              <Form >
                {/* NAME */}
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" placeholder="your name"/>
                  <ErrorMessage name='name' component={TextErr}/>
                </div>

                {/* EMAIL */}
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name='email' component={TextErr}/>
                </div>

                {/* CHANNEL */}
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" placeholder="you channel name" />
                        {/* By default, the cast logic of string is to call toString on the value if it exists. empty values are not coerced (use ensure() to coerce empty values to empty strings). */}
                    <ErrorMessage name="channel">
                        { (error) => { 
                            console.log('error youtubeform', error)
                            return (
                                <div className="errors">{error}</div>
                            )
                        }}
                    </ErrorMessage>
                </div>

                {/* COMMENTS */}
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" id="comments" name="comments" validate={validateComments}/>
                    <ErrorMessage name="comments" component="div" />
                </div>


                {/* ADDRESS */}
                <div className="form-control">
                  <label htmlFor="address">Address</label>
                  <Field name="address">
                    {(props) => { 
                      const { field, form, meta} = props;
                      return (
                        <div >
                          <input id="address"/>
                          { meta.touched && meta.error ?
                            <div >
                              {meta.error}
                            </div> :
                            null
                          }
                        </div>
                        )
                      }
                    }
                  </Field>
                </div>

{/* 
                //Facebook
                <div className="form-control">
                  <label htmlFor="facebook">Facebook Portfolio</label>
                  // {nested object with name social.facebook}
                  <Field type="text" id="facebook" name="social.facebook" />
                  <ErrorMessage name="social.facebook" component={TextErr}/>
                </div>

                //Twitter
                <div className="form-control">
                  <label htmlFor="twitter">Twitter Portfolio</label>
                  // {nested object with name social.facebook}
                  <Field type="text" id="twitter" name="social.twitter" />
                  <ErrorMessage name="social.facebook" component={TextErr}/>
                </div>

                //phoneNumb
                <div className="form-control">
                  <label htmlFor="phoneNumber">The First Phone Number</label>
                  <Field type="text" id="phoneNumber" name="phoneNumber[0]" />
                </div>

                //phoneNumb
                <div className="form-control">
                  <label htmlFor="phoneNumber">The Second Phone Number</label>
                  <Field type="text" id="phoneNumber" name="phoneNumber[1]" />
                </div>

                //phNumbers
                <div className="form-control">
                  <label htmlFor="phNumbers"></label>
                  <FieldArray name="phNumbers">
                    // this is children of <FieldArray> tag
                    {(fieldArrayProps) => { 
                      const { push, remove, form} = fieldArrayProps;
                      const { values} = form;
                      const { phNumbers} = values;
                      return (
                        <div >
                          {
                            phNumbers.map((phNumber, index) => (
                              <div key={index}>
                                <Field name={`phNumbers[${index}]`} />
                                <button type="button" onClick={() => { remove( index)}}> - </button>
                                <button type="button" onClick={() => { push( index)}}> + </button>
                              </div>
                            ))
                          }
                        </div>
                      ) 
                    }}

                  </FieldArray>
                </div> 
*/}

                {/* <button type="button" onClick={() => { formik.validateField("comments")}}>Validate comments</button>
                <button type="button" onClick={() => { formik.validateForm()}}>Validate all</button> */}
                {/* <button type="button" onClick={() => { formik.setFieldTouched("comments")}}>Set Field Touched</button>
                <button type="button" onClick={() => { formik.setTouched({ name: true, email: true, channel: true, comments: true, })}}>Visit Field</button> */}
                <button type="reset">Reset</button>
                <button type="button" onClick={() => { setFormValues( saveValues)}}>Load saved data</button>
                <button type="submit" disabled={ !formik.isValid || formik.isSubmitting}>Submit</button>
              </Form>            
            )
          }
        }
      </Formik>
    )
}

export default YoutubeForm
