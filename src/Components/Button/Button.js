import React from 'react';
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

export default Button;