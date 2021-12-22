import React from 'react'
import './App.css'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav >
      <h1 >Logo Page</h1>
      <ul className="nav-links">
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
