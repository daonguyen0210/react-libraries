 /* 
   ? what is routing
      _routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element
      _as we may already know, by default, react comes without routing. and to enable it in our project, we need to add a library named react-router
      _another opinion is single page application( SPAs) with multiple views need to have a mechanism of routing to navigate between those different views without refreshing the whole web page.

   ? what is the different packages 
      _react router library contains three different npm packages and each of the following packages has a different purporse
         _react-router
            is the core library that is used as a peer dependency for the other two packages listed followed
         _react-router-dom
            is the package that is used in react apps for routing
         _react-router-native
            has bindings to be used in developing

   ?  what is BrowserRouter or Router
      _it is a router what uses the HTML5 history API to keep track of routes history in the React app

   ?  what is "Switch in v5"
      _switch is the component will only render the first route that matches/inclues the path. once it finds the first route that matches the path, it will not look for any other matches. Not only that, it allows for nested routes to work property, which is somethings that <Route /> will not be able to handle
   
   ? what is "Routes in v6"
      _this "Routes" componenent is nothing but an upgraded version of what was called "Switch" in the earlier versions of the react router. it involves relative routing, linking, nested routing etc
   
   ? what is "Route"
      _it is responsible for rendering the UI of a react component, it has a prop called "path" which always matches the current URL of the application. the second required prop is called "element" that tells the "Route" component when a current URL is encountered and which React component to be rendered.

   ? what is "Link"
      _is a way to transition route state in the application. if we click a link component, a route state will be activated
         _"to" Prop
            the most basic react-router Link component may look something <Link to="/page1" >Page1</Link>
      _the most responsibility of the Link component is navigate the current location to the another location, what is describe by "to" attribute.
            i.e.
               the current location: http://localhost:3000
               when user clicks on Link component that has to="/learn": http://localhost:3000/learn
   
   ?  what is "NavLink"
      _it is used to style the active routes so that user knows on which page users are currently browsing on the website

      ?  what is the different between NavLink and Link
         _the Link component is used to navigate the different routes on the site. but NavLink is used to add the style attributes to the active routes
         _we need to add new prop called activeClassName to the NavLink component so that is applies that class whenever the route it is active

   ?  what is "Navigate"
      _when user access many paths, but we only want render a component, or we want to navigate to the destination component rendered, we use "Navigate" and attribute "to" to navigate to the 
         i.e. 
         <Route path="/myapps" element={<Navigate to="/about" />} />
         <Route path="/about" element={<About />} />

   ?  what is nested route
      _let image we have some route what have the same basic path such as "/course/learn", "/course/app", "/course/report", when without using nested programmer have read the path to have a realistic look, in lastest version v6, we have new is nested route
      _notice we also using slash before the children's path, leaving off the "/" is what tells React Router we want the "path" to be relative
         i.e.
            <Route path="/course" element={<Course />}> 
               <Route path="learn" />
               <Route path="app" />
               <Route path="report" />
            </Route>
   _we also notice that, when using nested route the child component will be nested into the parent compoent, it means the child component will display with parent component and below the parent component
   
      ?  what is "Outlet"
         _The Router-Outlet is a directive that’s available from the router library where the Router inserts the component that gets matched based on the current browser’s URL. You can add multiple outlets in your Angular application which enables you to implement advanced routing scenarios.

   ?  what is dynamic route
      _dynamic route is a route that not define by programmer but it depends on the user that mean when user enter a route what not declared but programmer still want to handle it, it called dynamic route. to get the value what pass by dynamic route we can use "useParams()" hook, what is object with the key is dynamic route and the value is what user pass into URL.
         i.e.
            <Route path=":thisIsDynamicRoute" element={<Dynamic />}/>

            function Dynamic() {
               const { thisIsDynamicRoute} = useParams();
               return (
                  <div>
                     <h1>the dynamic route is {thisIsDynamicRoute}</h1>
                  </div>
               )
            }
 */