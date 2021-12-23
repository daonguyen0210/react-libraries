/* 
? working with "State"
  * components can have "state" which is an object that determines how a component renders and behaves
  * "App" or "global" state refers to state that is available to the entire UI, not just a single component

? "defaultProps" property
  * defaultProps is a property in React components. some props in React need a fallback value in case no data was passed as a prop. This is similar to assigning a default value to a function argument.
    class book extends React.Component {
      render() {
        return <h2 >hello world {this.props.greeting}</h2>
      }
    }

    book.defaultProps = {
      greeting: "React App"
    }

? "propTypes" property
  * props and propTypes are importannt mechenisms for passing read-only attributes between React compoenents
  * Since JS doesn't have a built-in type-checking solution, however, React has an internal mechanism for props validation called propTypes.
  * when props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JS console.
  * if "default props" are set for the React component, the values are first resolved before type checking against propTypes. Therefore, default valuesare also subject to the props type definitions.

? the difference between map() method and filter() method
  * They both return a new array. map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). filter returns a new array of the elements of the original array (with no change to the original values). filter will only return elements where the function you specify returns a value of true for each element passed to the function.
  * So map returns the same number of elements as the original, but the element value will be transformed in some way and filter will return the same or less number of elements than the original but not change the original elements’ values.


? How to "build for production"
  * when we build the application, we create many files js and css event where we can create, but when the application run, it has to load many files at a lot location in project, it makes the process of the UI slower a bit. use the command "npm run build", it will make the application in a folder for each type of data.

  * "npm i -g serve"
    * install serve package from npm library
  

  * serve -s build -p 8000
    * build the localhost with the port is 8000
    * we can ignore the "-p 8000" and the default port is 3000
  
  *  npm i json-server
    * install json-server package from npm library,
    at the file package.json, in the debug sesion, we add the server key with the value is "json-server --watch db.json --port 5000"
    In the db.json file, we can adjust the file with the database we have already had   
    To run application on another npm library, we can open another terminal and run the application

*/


/* 
? fetch() method in js
  * this fetch() method takes two parameter: URL and options where URL is the URL of the website that we are trying to access. the options parameter takes two values, GET and POST,  
      * GET is used to fetch the contents of the website whose URL is specified,
      * POST is used to post the contents to a website whose URL is specified, and the default value for options is GET
      * PUT request is used to update the resources on the server. whenever there is a requirement to update data on the backend or server then you can fulfill your requirement by using the PUT method

*/

/* 
? what is Routing?
  * Routing is the ability to move between different parts of an application, when a user enters a URL or clicks an element(link, button, icon, image, etc) within the application
*/