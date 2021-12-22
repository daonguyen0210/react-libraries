import {React, useEffect} from 'react'
import {Link, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom'


const Shop = (props) => {
  const history = useHistory(); 
  const {login} = props;


  useEffect(() => { 
    if( !login){
      history.push("/");
    }
  }, [login, history]); 

  const { path, url} = useRouteMatch();

  console.log('line18', path, url);

  return (
    <div>
      <h2 >Shop Page</h2>

      <ul >
        <li >
          <Link to="./ViewShop">View Profile</Link>
        </li>
        <li >
          <Link to="./AboutShop">Edit Profile </Link>
        </li>
      </ul>

      <Switch >
        <Route path="/viewShop" />
        <Route path="/editShop" />
      </Switch>
    </div>
  )
}

export default Shop
