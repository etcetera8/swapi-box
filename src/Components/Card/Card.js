import React from 'react';
import './Card.css';

const Card = ({name, species, homeworld, population}) => {
  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <i className="favorite">x</i>
      </header>
      <ul className="categories">
        <li>Homeworld: {homeworld}</li>
        <li>Species: {species}</li>
        <li>Population: {population}</li>
      </ul> 
    </article>
  )
}

export default Card;