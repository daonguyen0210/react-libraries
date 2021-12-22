import './App.css';
import About from './About.js'
import Shop from './Shop.js'
import Nav from './Nav.js'
import NotFound from './NotFound'
import Post from './Post'
import { useState} from 'react'
imrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { useHistory} from 'react-router-dom'

function App() {

  const [login, setLogin] = useState(false);
  const history = useHistory();

  const handleLogin = () => { 
    setLogin( !login);
  }

  return (
    <Router >
      <div className="App">
        <Nav />

        <button onClick={handleLogin}>{login? "LogOut" : "LogIn"}</button>

        <Switch >
          <Route  exact path="/" component={ Home} />
          <Route  path="/about" component={ About} />
          <Route  path="/shop" ><Shop login={login} /></Route>
          <Route  path="/post/:id" component={ Post} />
          <Route  component={ NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => { 
  return (
    <div >
      <h2 >Home Page</h2>
    </div>
  )
}

export default App;
