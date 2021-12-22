import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom'


ReactDOM.render(
  <Router>
     <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate to="/learn" />} />
        <Route path="/learn" element={<Learn />} >
          {/* _this is nested route */}
          <Route path="course" element={<Course />} > 
            <Route path=":courseid" element={<CourseId />}/>
          </Route>
          <Route path="bundle" element={<Bundle />}/>
        </Route>
     </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measu,ring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function Home() {
  return (
    <div>
      <h1>Home router</h1>
    </div>
  );
}


function Learn() {
  return(
    <div >
      <h1 >Learn route</h1>
      <p >All course are nested here</p>
      <Link className="btn btn-success" to="/learn/course">Course</Link>
      <hr />
      <Link className="btn btn-primary" to="/learn/bundle">Bundle</Link>
      <Outlet />
    </div>
  )
}

function Course(){
  const courseList = ["React", "Angular", "Vue", "NodeJS"];
  const randomCourseName = courseList[ Math.floor(Math.random() * courseList.length)]
  return (
    <div >
      <h1>Course route</h1>
      <p>More Test</p>
      <NavLink className="btn btn-secondary"  to={`/learn/course/${randomCourseName}`}>{randomCourseName}</NavLink>
      <Outlet />


    </div>
  )
}


function Bundle(){
  return (
    <div>
      <h1>Bundle route</h1>
    </div>
  )
}

function CourseId(){
  const { courseid} = useParams();
  console.log(courseid);  
  return (
    <div >
      <h1>CourseId and the courseid is {courseid}</h1>
    </div>
  )
}
reportWebVitals();


