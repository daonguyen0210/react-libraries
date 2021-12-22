/* 
? what is the routing in react.
  * when users clicks anything in application, the UI will change and the URL also changes. but to keeping the UI is sync with URL, so the simple mission of the react-rout is keeping the UI sync with the URL.

  * Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element.
  * As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.

? how many main packages the react-route have
  * there are three main packages the react-router has:
    * react-router => the core package for router
    * react-router-dom => which contains the DOM bindings with react-router/ the router components for websites
    * react-router-native => the router components for app developer enviroment using react-native

? what is react-router API:
  * react-router API is based on three component.
    * <Router >: keeps the UI in sync with the URL
    * <Link >:   render a navigation(dieu huong) link
    * <Route >:  render a UI component depending on the URL.

  *<Router >:
    a router component only has one child component
    the main job of a Router component is to create a "history object" to keep track of the location(URL). when the location changes because of a navigation action(user click on link, anchor, or something...), the child component is re-render
  *<Link >:
    link change the URL without refreshing the page.
  
  *<Route >:
    is used to specify the URL that corresponds to each component,
      e.g <Route path="/" component={Home} />

    * Using the "exact" props
      imagine we had a Users component that displayed a list of users. we also have a CreateUser component that is used to create users. the url for CreateUser should be nested under Users. 
        <Route path="/users" component={Users}/>
        <Route path="/users/create" component={CreateUser}/>
      
      when we go to "http://app.com/users" the router will go through all of our defined routes and return the FIRST match it finds. so in this case, it would find the Users route first and then return it

      if we go to "http://app.com/users/create" it would again go through all of our defined routes and return the FIRST match it finds. React router does partial matching(khop mot phan), so "/users" partially matches "/users/create", so it would incorrectly return the Users route again

      the "exact" param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current URL.

      so in this case, we should add exact to our "Users" route so that it will only match on "/users";

? how to use "Switch"
  * every <Route > that matches the location render inclusively, so when using the Switch, it will look for the first child component and stop looking.

? the prop of <BrowserRouter /> or <Router />
  * forceRefresh: bool
    if it is true, the router will use fullpage refreshes on page navigation. You want to use this to imitate(bat chuoc) the tranditional serve-rendered app would work with full page refreshes between page navigation.

? what is scroll to top on route change?
  * when changing between different routes, the page will remain the position of the previous route, but it makes the users feeling not sastified, so to scoll to top when each route change, we can use { useEffect, useLocation} hook
    in the file goToTop.js
      import { useEffect} from 'react'
      import { useLocation} from 'react-router-dom'

      import React from 'react'
      
      const goToTop = () => {
        const routePath = useLocation();

        useEffect(() => { 
          window.scrollTo( 0, 0);
        }, [routePath]);

        return null;
      }
      
      export default goToTop

    we initailize a variable by the nam routePath which stores the current location what returned by using useLocation() hook, when the dependency changes, the useEffect will render and move the window on the top

? Not Found Page/ 404 Page
    when user enters a strange link, the page will be not automatically execute, we should create a new compoent to display that the current loction is incorrect
      
      NotFound.js

      import React from 'react'
      
      const NotFound = () => {
        return (
          <div>
            <h1 >404 Not Found Page</h1>
          </div>
        )
      }
      
      export default NotFound
      

? how to pass "id dynamics as param"
    when identifying the path to component what including the dynamical variable, we should use colon ":" before path
    <Route path="/post/:id" component={Post} />

? what does props of the route component have when the component is rendered.
    const {history, location, match, staticContext} = props

    https://reactrouter.com/web/api/location

    * match: 
      an object contains information about how a <Route path /> matched the URL, 
        match:{
          params: (obj)key/value pairs parsed from the URL corresponding to the dynamic segments of the path
          isExact: (boolean) true if the entire URL was matched
          path: (string) used to match, useful for building nested
          url: (string) the matched portion of the URL. useful for building nested.
        }
      
? what is useParams
    * useParams return a object of key/value pairs of URL parameters. use it to access match.params of the current <Route />

? what is <Redirect />
    * let image, when user log-in and click a navigation link, then the route component will be rendered, but what happens if user were not loged in but still click into the route component? to avoid the problem we should redirect(dieu huong di phia khac) 
        const { login, setLogin} = useState( false);
        ...
        <button onClick=() => { setLogin( !login)}>{ login ? "Log-Out" : "Log-In"}</button>
        ...
        <Route path="/about">{ login ? <About /> : <Redirect to="/" />}</Route>

? what is "history"
    * it is refers to the history package, which is dependencies of React Route, and which provides several different implementations for mannaging session history in JS in various environments
        + length - nb, the number of entries in the history stack
        + action - str, the current action ( Push, Replace, Pop)
        + location - obj, the current location.
            _pathname - str, the path of the URL
            _search - str, the URL query string,
            _hash - str, the URL hash fragment
            _state - obj, location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. only available in the browser and memory history

        + push(path, [state]) - fn, pushes a new entry onto the history stack
        + replace(path, [state]) - fn, replaces the current entry on the history stack
        + go(n) - fn, moves the pointer in the history stack by n entries.
        + goBack() - fn, equivalent to go(-1)
        + goForward() - fn, equivalent to go(1)
        + block(prompt) - fn,prevents navigation 

? what is "useHistory" 
      * the hook gives we access to the history instance that you may use to navigate

*/