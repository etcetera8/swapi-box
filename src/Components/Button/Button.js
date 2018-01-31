import React from 'react';
import './Button.css';

const Button = ({ name, resourceCall }) => {
  return (
    <button 
      className='Button'
      onClick={resourceCall}> 
      {name}
    </button>
  )
}

export default Button;