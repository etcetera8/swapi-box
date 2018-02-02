import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name, resourceCall, className }) => {
  return (
    <button 
      className={`Button ${className}`} 
      onClick={resourceCall}> 
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  resourceCall: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;