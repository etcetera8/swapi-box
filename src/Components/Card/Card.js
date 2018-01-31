import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <article className='Card'> 
      <header>
        <h1 className="name">card</h1>
        <i className="favorite">x</i>
      </header>
      <ul className="categories">
        <li>Homeworld: tatooine</li>
        <li>Species: human</li>
        <li>Language: Galactic Basic</li>
        <li>Population: 200000</li>
      </ul> 
    </article>
  )
}

export default Card;