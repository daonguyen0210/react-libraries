/* 
    ? What is the Formik
    * it is a small library that helps you deal with forms in React

    ? Why have to use Formik
    * use Formik helps deal the three most annoying when working with the React-form:
      1, getting values in and out of the form
      2, validation( xac nhan) and handle error messages
      3, handling form submission

    * Formik state: is nothing but it is an object that maintains the value of the every form field

*/


/* 
TODO: useFormik
    * useFormik() is a custom React hook that will return an object, which includes properties and methods what  helps user handle the change of all fields 
    * the hook take in an object about form state as argument to assign to the initialValues property from object returned.
    * every return of useFormik always includes method( handleChange, handleSubmit, handleBlur...) to hanlde event after triggering event.
    
    ! const formik = useFormik({
      initialValue: {
          name: '',
          age: '',
      }
    })

    * formik.values return an object which always reflects the state of the form
    * formik.handleChange is an method of the object, what helper users update the values from. when an event trigeer, the handleChange will find out the name that coressponding the name attribute to update the values

    ! formik.getFieldProps(nameElement | idElement)
    * The code above is very explicit about exactly what Formik is doing. onChange -> handleChange, onBlur -> handleBlur, and so on. However, to save you time, useFormik() returns a helper method called formik.getFieldProps() to make it faster to wire up inputs. Given some field-level info, it returns to you the exact group of onChange, onBlur, value, checked for a given field. You can then spread that on an input, select, or textarea.
      <input name="name" {...formik.getFieldProps('name')} />
*/

/*
TODO: ObjectSchema
    ? what is Schema
      *   schema is only a nodejs, what describe about a thing by object, but we have to define the type for the object. e.x we have a car 
      *   car = {
      *       name: 'Huyndai',
      *       year: 2010,
      *       price: 2000,
      *   }
      *   but with the Schema we have to define as following with the yup library:
      *   car = Yup.object().shape({
      *       name: Yup.string().required(),
      *       year: Yup.number().required(),
      *       price: Yup.number().required(),
      *   })
      * 
      * Yup.string()
      * By default, the cast logic of string is to call toString on the value if it exists. empty values are not coerced (use ensure() to coerce empty values to empty strings).

*/

/* 
TODO: Tag HTML in Formik


    TODO: <Formik />
        * is a component that helps you with building forms. it uses a render props pattern made popular by libraries like React Motion and React Router
        * it takes three attributes what similar to an attribute takes initial values, one takes as to handle submit, and the last one to validate schema.
          the props of the children.
            ? dirty
              this prop checks if our values field are not deep equal with initial values, it will return true, false otherwise. we can use this to disable our submit button when the form loads initialy
            ? errors
              this object holds the validation erros what correspondes to each input field( or <Field />), and is populated( filled) with the definitions we pass into YUP object schema
            ? touched
              this is an object that watches if a form filed has been touched. each key correspondes to the name of the input elements and has a boolean value.
            ? isValid
              return true if there is no errors( i.e. the errors object empty) and "false" otherwise.
            

    TODO: <Form />
        * is a small wrapper around an HTML <form /> element that automatically hooks into Formik's handleSubmit and handleReset. all other props are passed directly through to the DOM node.

    TODO: <FieldArray />
        * is a component that helps with common array/list manipulations. we pass it a name property with the path to the key within values that holds the relevant array.
        * <FieldArray /> will then give you access to array helper methods via render props. For convenience, calling these methods will trigger validation and also manage touched for you.
        * array is a colection of items what have something similarities, so FieldArray is a collection, where some Field has properties similarities, to use this tag, we have to declare initialvalue as an array, and the name attribute has the same name with initialvalue.
        * the props of FieldArray is fieldArrayProps what have many method and properties to interact with form
    
    TODO: <Field />
        * <Field /> will automatically hook up inputs to Formik. It uses the name attribute to match up with Formik state. <Field /> will default to an HTML <input /> element
        * there are a few different ways to render things with <Field as | children | component>
        ! as?: string | React.ComponentType<FieldProps['field']
          Either a React component or the name of an HTML element to render. That is, one of the following"
            input
            select
            textarea
            a valid HTML element name
            a custom React component( onChange, onBlur, name, value pluse any other props passed to directyl to Field)
          * default is 'input' (so an <input> is rendered by default)
          By default, the Field will be rendered as input element, but sometimes we need another type of form to select data from the user such as select, or textarea... to instruct the Field render as a select, textarea... we use the as props to specify the Field should render

        ! children?: React.ReactNode | ( (props: FieldProps) => React.ReactNode)
          can either be an array of elements( e.g. <option /> in the case of <Field as="select" />) or a callback function( a.k.a render prop). the render props are an object containing:
            1, field: an object containing onChange, onBlur, name and value of the field()
            2, form: the formik bag
                which includes an object containing a subset of the injected props and methods( all the method with names that start with set<Thing> and any props that were passed to the wrapped component
                  1, props ( props passed to the wrapped component)
                  2, resetForm  
                  3, setErrors
                  4, setFieldTouched
                  5, setFieldValue
                  6, setStatus
                  7, setSubmitting
                  8, setTouched
                  9, setValues
            3, meta: an object containing metadata( i.e. value, touched, error and initialValue) ablue the field

        ! component?: string | React.ComponentType<FieldProps['field']
          e.g < ErrorMessage name="name" component="div"/>    
          with the component props(component="div"), the field will be render as div-component
        
        ! validate?: (value: any) => { undefined | string | promise<any>}
          as we known that, the validation always run after "onChange | onBlur" event when the when the callback function invoked it alway returns the value of the field input. the callback function can either be synchronous or asynchronous:
            1, Sync: if invalid, return a string containing the error message or return undefined.
            2, Async: return a Promise that resolves a string containing the error message.  


    TODO: <ErrorMessage />
        *   <ErrorMessage /> is a component that renders the error message of a given field if that field has been visited (i.e.touched[name] === true) (and there is an error message present). It expects that all error messages are stored for a given field as a string. Like <Field />, <FastField />, and <FieldArray />, lodash-like dot path and bracket syntax is supported
*/


/* 
TODO: onBlur:
        * the onBlur event occurs when an objcet loses focus
        * the obBlur event is most often used from validation code( e.g -for example: when the user leaves a form field)
        * the onBlur event is the oposite of the onFocus event



TODO: onChange: 
        * the onChange event occurs when the value of an element has been changed
        * the radiobuttons and checkboxes, the onChange event occurs when the checked state has been changed.
        * the main notification is the onChange occurs when the element loses focus, after the content has been changed

*/

 /* 
? what is YUP library
    * Yup is a validation library. It can be used to validate object , array , string and almost every JavaScript data structure. We would use it to validate our input.
 

? does Formik support nested object/array to store or submit data 
  * yes, it have
      const initialValue = {
        social: {
          facebook: "",
          twitter: "",
        },
        phoneNumber: [""],
      }
      ...
      <Field type="text" name="social.facebook" />
      <Field type="text" name="social.twitter" />
      <Field type="text" name="phoneNumber[0]" />

? when does validation run
  by the default the valition always runs after "onChange", "onBlur" or "onSubmit" event, the form.error will be populated with errors mess from the yup validation or from the attribute < Formik> tag

  ? how to ignore the valition error
    with the onChange event, we have attribute validateOnChange: boolean, default if true, determines if form validation should run or should not run after every onChange event
    with the onBlur event, it similar
    
? when we should disable the submit button?
  we can disable the submit for two scenarios
      1, when users enter incorrects type of input field, or missing some fields. when missing some fields, the errors object will be populated. we should prevent from user click on submit button. Formik field passes to children component a objeact that include a propperty is isValide: boolean, it always return true if errors property is empty and false otherwise. we can use this property( isValidate) to control disable button tag
        <button type="button" disable={ !props.isValidate}> Submit </button>
      2, when user clicks on the submit button, all the values will be sent to backend and it take a little of time to process, if user continues click on the button, that means form state continues sent to the serve, at that time we should disable the submit button to prevent the situation occurs, Formik tag passes to children component an object that includes a property is isSubmitting: boolean, what returns true if form is being sumbit, false otherwise.
        <button type="button" disable={ !props.isSubmitting}>infor</button>

? how does Fomik handle when faces with submission scenario
  To submit a form in Formik, we need to somehow fire off the provided "handleSubmit(e)" or "submitForm" prop. when you call either of these methods, Formik will execute the following each time:
  * Pre-submit
    Touch all fields. "initialValues" are required and should always be specified
    Set "isSubmitting" to true
    Increment "submitCount" + 1
  * Validation
    Set "isValidating" to true
    Run all field-level validations, "validate" and "validationSchema" asynchorounsly and deeply merge results
    Are there any errors?
      Yes: Abort submission. Set "isValidating" to false, set "errors", set "isSubmitting" to false
      No:  Set "isValidating" to false, proceed to "Submission"
  * Submission
    Proceed with running your submission handler( i.e. "onSubmit" or "handleSubmit")
    We call setSubmitting(false) in your handler to finish the cycle.
*/

/* 
! LOAD SAVED DATA
  why we have to load saved data? let image, when our form have many field, and when something is wrong after submit, user has to fill the form again, to help user filles faster. we should save data in useState hook, and when user wants to re-fill automacticaly by clicking button, we reload the save into the form. 

  ? "enableReinitialize: boolean"
  this props is put in the formik tag, default is false, it used to reminder formik should reset the form each time when initialValue changes after the initialValues has been initialed

  ? how to load saved data
    1. we create an object( e.g. saveValues) what stores data that we want to display into UI, REMEMBER, saveValues has the key of property likes initialValues's key of property.
    2. we can add button to fetch action of an API, when the button is clicked, we can push "saveValues" to useState( e.g. formValues) hook 
    3. in Formik tag, with "initialValues" props, we change the initial values, when the initial values changes, the Formik will render and display on UI.
      initialValues = { formValues || initialValues}
    4. in formik tag, we add "enableReinitiallize" to specify Formik can change when initialValues changes

*/

/* 
! RESET FORM DATA
  ? why we need reset form data?
    when user wants to clear all form data to enter new data, if there is a few input it will be not problem, but when Form with alot of input field, at that times, the problems appear
  
  ? how to reset form data
    1, we can add the button at the end of the form with the type attribute is "reset", when user clicks on the button, the form data auto clears
    2, at the handleSubmit function or onSubmit that handle our form submission. after invoking setSubmitting("false"); we should call resetForm() method to clear method form
        e.g. 
            function onSubmit( values, onSubmitProps){
              onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm(); 
            }
      
*/

/* 
install library
  react-datepicker: what is library to picker up date and select data in formik form
*/