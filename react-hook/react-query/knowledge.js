/* 
? what is React Query
  _It is a library for fetching data in a React application

? why do we use React Query library
  _since React is a UI library, there is no specific pattern for data fetching
  _useEffect hook for data fetching and useState hook to maintain component state like loading error or resulting data
  _if the data is needed throughout the app, we tend to use state management libraries
  _most of the state management libraries are good for working with client state
  _state management libraries are not great for working with asynchronous or server state

? some problems what react query was created to solve
  _problems
    + it's persisted remotely( that means it still stays at the server state) and it is not in our control
    + it's accessible and changeable by other people
    + it can become stale( out of date)
    + it requires an asynchronous API for fetching and updating
  _solution
    + to store our server state in an in-memory cache
    + a mechanism to know ì the state has changed
    + to periodically update the state in the background
    + to reflect updates as quickly as possible

? what is client/server state
  _client state
    persisted( ton tai) in your app memory and accessing or updating it is synchronous
  _server state
    persisted( ton tai) remotely and requires asynchronous APIs for fetching or updating
    has shared ownership
    data can be updated by someone else without your knowledge
    ui data may not be in sync with the remote data
    challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc

? what is query and cache
  _query is a resquest to take data what extracts from database
  _Caching is an optimization technique that consists in keeping recently (or frequently) used data in a memory location that has cheap and fast access for repeated queries. Due to multiple reasons, accessing the data from its original source can be expensive and caching appears as a solution that alleviates this problem.

? what is "QueryClientProvider" and "QueryClient"
  _QueryClientProvider component to connect and provide a "QueryClient" to our application
  _"QueryClient" can be used to interact with a cache
    i.e. App.js
      import { QueryClientProvider, QueryClient} from 'react-query'
      const queryClient = new QueryClient();
      function App(){
        <QueryClientProvider client={queryClient}>
          ...
        </QueryClientProvider>
      }
  _by putting "queryclientprovider" in the app component that means we can use react-query anywhere in our application 

? what is "useQuery"
  _is to fetch data from any API endpoint, and save it into cache
  _basically, useQuery takes two parameters 
      + query-key:  whatever API data you will be returning from your API function. React Query will save that data in cache by using this query-key you will be assigning 
      + callback func:  inside that function we basically write our API calls.
  _the query results returned by useQuery contains all of the information about the query, and has type is object
      + isLoading/status==="loading": the query has no data and it currently fetching
      + isError/status==="error": the query encountered an error 
      + isSuccess/status==="success": the query was successful and data is available
      + isIdle/status==="idle": the query is currently disabled

? what is "ReactQueryDevTools"
  _ReactQueryDevTools show us what the react query are doing
  _there are two type of ReactQueryDevTools
      + Floating mode
          will mount the devtools as a fixed, floating element in your app and provide a toggle in the corner of the screen to show and hide the devtools. this toggle state will be stored and remembered in localStorage across reloads
            i.e.
              import { ReactQueryDevTools} from "react-query/devtools"

              function App(){
                return(
                  <QueryClientProvider >
                    ...
                    <ReactQueryDevTools />
                  </QueryClientProvider>
                )
              }
              + Embedded mode
              will embed the devtools as a regular component in our application. we can style it howerver we'd like after that
                i.e.
                  import { ReactQueryDevtoolsPanel} from "react-query"

                  function App(){
                    return(
                      <QueryClientProvider >
                        ...
                        <ReactQueryDevtoolsPanel />
                      </QueryClientProvider>
                    )
                  }

? what is cacheTime
  _react hook useQuery takes third argument with type of object, the object has a property is "cacheTime: number| Infinity"
    + the time in milliseconds that unused/inactive cache data remains in memory. when a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. when different cache times are specified, the longest one will be used.
    + if cacheTime is out, the query will subsequent next fetch data from database
    + if set to "Infinity", will disable garbage collection.
    + the default is 5 minutes.

? what is staleTime
  _react hook useQuery takes third argument with type of object, the object has a property is "staleTime: number| Infinity"
    + default to 0
    + the time in milliseconds after data is considered stale. this value on applies to the hook it is defined on
    + if set to "Infinity", the data will never be considered stale
    + there are three type state of time, let imagine the "staleTime: 20"
        when the query fetch data, it called "fetch"
        fetch< current time < staleTime => called "fresh": when time is fresh, the data will still exist in localStorage
        current time > staleTime => called "stale": the data will be fetched from cache

? what is refetchOnMount
  _react hook useQuery takes third argument with type of object, the object has a property is "refetchOnMount: boolean| 'always'"
    + when a component mounts( mounting refers to the component in React-creates DOM nodes being attached to some part of the document) and a query is run for the first time, the returned data form this successful query is cached. sometimes, we may not want this same query to run agian if the component remounts and the returned data from the previous call is still exists and fresh in the cache
    + defaults to "true"
    + if set to "true", the query will refetch( get data from cache) on mount if the data is stale
    + if set to "false", the query will not refetch on mount
    + if set to "always", the query will always refetch on mount
  
? what is refetchOnWindowFocus
  _react hook useQuery takes third argument with type of object, the object has a property is "refetchOnWindowFocus: boolean| 'always'"
    + when user click into a component to get focus, the query will check if the data is stale to refetch
    + defaults to "true"
    + if set to "true", the query will refetch on window focus if the data is stale
    + if set to "false", the query will not refetch on window focus
    + if set to "always", the query will always refetch on window focus
  
? what is refetchInterval
  _react hook useQuery takes third argument with type of object, the object has a property is "refetchInterval: number | false | fn"
    + when we want to refetch data at frequently at in specified milliseconds 
    + if set to a number, all queries will continoustly refetch at this frequency in milliseconds
    + if set to a func, the func will be executed with the lastest data and query to compute a frequency
    + note that, the refetchInterval will be paused if the window loses focus, but if we want the background still refetches at regular intervals we can configuration another interval is "refetchIntevalBackground"

? what is refetchIntervalBackground
  _react hook useQuery takes third argument with type of object, the object has a property is "refetchIntervalBackground: boolean "
    + if set to "true", queries will continousl refetch with a "refetchInterval" will continue to refetch while their tab/window is in the background( losing focus)
  
? what is "enabled"
  _react hook useQuery takes third argument with type of object, the object has a property is "enabled: boolean"
    + if enabled has value if false, when the component is mounted so query is not fetch data, to REFETCH data, useQuery return a "refetch" method, when call this method, useQuery will auto refetch
  
? what is "select"
  _react hook useQuery takes third argument with type of object, the object has a property is "select: ( data: TData) => unknown"
  _this option can be used to transform or select a part of the data returned by the query function. it automatically receives data as argument

? what is "keepPreviousData"
  _react hook useQuery takes third argument with type of object, the object has a property is "keepPreviousData: boolean"
  _defaults to false
  _if set, any previous data will be kept when fetching new data because the query key changed

? what is "useQueries" hook
  _to save time, we want to fetch more data from one or many same or different path, we can fetch data subsequently but it is not optimize idea. with the useQueries, we can pass an array and using map method to query the data
    i.e.
        const reusult = useQueries( 
          useId.map( id => return {
            queryKey: ["users", id],
            queryFn: () => { return fetchUserId( id)}
          })
        )

? what is "paginated query"
  _when the number of items returned in the server's JSON responde is too large, the server can limit the number of items in the JSON to a small subset("page") of the total available set to reduce the amount of data transferred from the server and speed up the server response time. the server will then provide links to get the previous and next JSON pages from the dataset.

? what is "useInfiniteQuery"
  _this hook allows us can fetch data from JSON server large such as page.
  * useInfiniteQuery( queryKey, ({ pageParm = 1}) => { fetchPage( pageParm)}, ...options)
    _options
        + getNextPageParam: (_lastPage, allPages) => unknown | undefined
          .Pay attention when arrow function return without curly brace that means it will return ONLY ONE VARIABLE or UNDEFINED
          .when new data is received for this query, this function receives both the last page of the infinite list of data and the full array of all pages
          .it should return a single varivable that will be passed as the last optional parameter to your query function
          .return "undefined" to indicate there is no next page available
        + getPreviousPageParam: (_firstPage, allPages) => unknown | undefined
          .pay attention when arrow funtion return without curly braces that means it will only return ONE VARIABLE or UNDEFINED
          .when new data is received for this query, this function receives both the first page of the infinite list of data and the full array of all pages
          .it should return a single variable that will be passed as the last optional parameter to our query
          .return "undefined" to indicate there is no previous page available

? what is "mutations"
  _unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. for this purpose, React Query exports a useMutation hook.

? what is "useMutation"
  _it is react hook what helps us deal the proplem what relates to the modify json server
  * const { mutate} = useMutation( mutationFn)
      mutationFn: axios.post(http, value);
      +when we call useMutation by calling the "mutate" method and passing the value such as mutate( hero);























*/



