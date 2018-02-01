import React from 'react';
import './Card.css';

const Card = ({name, species, homeworld, population, setFavorite}) => {
  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={setFavorite}className="favorite">x</button>
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