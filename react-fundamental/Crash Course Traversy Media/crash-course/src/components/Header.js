import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation} from 'react-router-dom'


const Header = (props) => {

  const { title, onAdd, showAdd} = props;
  const location = useLocation()

  const handleClick = () => { 
    onAdd();
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && 
        <Button color={showAdd ? "blue" : "green"} text={showAdd ? "Close" : "Add"} onClick={handleClick}/>
      }
    </header>
  )
}


Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header 