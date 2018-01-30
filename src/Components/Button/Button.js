import React from 'react';
import './Button.css';

const Button = ({ name }) => {
  return (
    <button className='Button'> 
      {name}
    </button>
  )
}

export default Button;