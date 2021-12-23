// import logo from './logo.svg';
import { useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'
import About from './components/About'
import axios from 'axios'
// import { FaTimes } from 'react-icons/fa';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => { 
    const fetchTasks = async () => { 
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      return data;
    } 

    fetchTasks()
      .then((responde) => { 
        setTasks( responde);
      })
    // axios.get('http://localhost:5000/tasks')
    //   .then( (respond) => { 
    //     setTasks(respond.data)
    //   }) 
    //   .catch((err) => { 
    //     console.log('Something went wrong');
    //   })
  }, [])


  // delete task
  const deleteTask = async (key) => { 
    await fetch(`http://localhost:5000/tasks/${key}`, {
      method: 'DELETE',
    });
    
    setTasks( tasks.filter( task => task.id !== key))
  }


  // toggle reminder
  const toggleReminder = async (id) => { 

    let toggleValue = tasks.filter( (task) =>  task.id === id ? {...task, reminder: task.reminder} : '').pop();
    console.log( toggleValue.reminder)

    await fetch( `http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify( {...toggleValue, reminder: !toggleValue.reminder}),
    });

    setTasks( tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

 
  // add Task
  const addTask = async (task) => { 
    let getId = Math.floor( Math.random()* 1000 + 1);

    const option = {
      method: 'POST',
      body: JSON.stringify( {id: getId, ...task}),
      headers: {'Content-type': 'application/json'}, 
    }
    await fetch('http://localhost:5000/tasks', option);

    setTasks( [...tasks, {id: getId, ...task}])
  }

  
  // the props with onX has meaning is
  return (
    <Router >
      <div className="container">
        <Header 
          onAdd={ () =>  setShowAddTask( !showAddTask)}
          showAdd={ showAddTask} 
          />
        <Route path="/" exact render={ (props) => (
          < >
            {showAddTask &&  <Addtask onSubmit={ (task) => addTask(task)}/>}

            { tasks.length > 0 ?
              <Tasks 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder}
              /> :
              'No Tasks to Show'
            }
          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}


/* 
class App extends React.Component{
   
  render() {
    return (
      <h1 >Hello from App class component </h1>
    )
  }
}

*/

export default App;


// https://youtu.be/w7ejDZ8SWv8?t=5051