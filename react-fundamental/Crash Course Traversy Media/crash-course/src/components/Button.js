import PropTypes from 'prop-types'


const Button = (Props) => {

  const {color, text, onClick} = Props

  return (
    <button 
      style={{
        background: color
      }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  )
    
}

Button.defaultProps = {
  color: "steelblue"
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
