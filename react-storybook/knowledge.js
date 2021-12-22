/* 
! install library
  * npm install sb

*/

/* 
! what and why ?
  +, a development environment and playground for UI components
  +, create components independently
  +, showcase those components interactively in an isolated development environment
  +, ability to view the different components that have already been developed
  +, view what are the different props that those developed components accept
  +, ability to visually showcase those components to your stake holders for feedback
  +, dynamically change props, accessibility score

  ? what does "storybook" folder have in it
    in the "storybook" folder, it created 2 file
      * main.js file
        from main.js file we export an object with two properties
          first one is "stories", it indicates taht all files within the source folder have end with "stories.mdx" or "js/jsx/ts/tsx"
          other one is "add-ons"      
      * preview.js file
        contains the configurations for our stories

  ? what is story in storybook
    story represents a single visual state of a component
  
  ? how to create a story in storybook
    we need three file, one is js, another is css and the last one is stories.js
      Button.js
        we create the JSX and take props what is passed when file "stories.js" invoked,

        e.g.
          import React from 'react'
          
          function Button( props) {
            const { variant, ...rest} = props;
            return (
              <div>
                <button className={`button ${variant} `} {...rest}>Button</button>
              </div>
            )
          }
          
          export default Button
      
      Button.css
        with file css we can create effect for the JSX of Button.js
          e.g.
            .button {
              color: white;
              padding: 1rem 30px;
              ...
            }

            .primary { color: blue;}
            .secondary { color: gray;}
            .success { color: green;}
            .danger { color: red;}
          
      Button.stories.js
        import React from 'react';
        import Button from "./Button"

        export default {
          title: "Button",
          component: Button,
        }

        export const Primary = () => { return( <Button variant="primary">Primary</Button>)}
        export const Secondary = () => { return ( <Button variant="secondary">Secondary</Button>)}
        export const Sucess = () => { return( <Button variant="success">Success</Button>)}
        export const Danger = () => { return( <Button variant="danger">Danger</Button>)}

  ? what is stories heirarchy
    when we want to merge many stories folder in components folder to easier manager. we add name total folder in "title" property in stories.js
    let image, we have two stories, one is Button and the other is Input, within .stories.js of each file, with the "title: DOM/..."

  ? how to change the name of each 
    e.g. within file Button.stories.js we want to change const Primary to when it displayed, we do:
        e.g.
          Primary.storyName="Primary change name";
*/