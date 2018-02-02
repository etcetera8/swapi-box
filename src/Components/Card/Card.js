import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({name, species, homeworld, population, setFavorite, className}) => {
  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'people')} className={`favorite ${className}`}>x</button>
      </header>
      <ul className="categories">
        <li>Homeworld: {homeworld}</li>
        <li>Species: {species}</li>
        <li>Population: {population}</li>
      </ul> 
    </article>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default Card;