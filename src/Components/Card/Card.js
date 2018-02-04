import React from 'react';
import PropTypes from 'prop-types';
import './PeopleCard.css';
import './Card.css';

const Card = ({person, setFavorite, className}) => {
  const {name, homeworld, species, population} = person;
  return (
    <article className='Card PeopleCard'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'people')} className={`favorite ${className}`}>★</button>
      </header>
      <ul className="categories">
        <li><span className='key'>Homeworld:</span> {homeworld}</li>
        <li><span className='key'>Species:</span> {species}</li>
        <li><span className='key'>Population:</span> {population}</li>
      </ul> 
    </article>
  )
}

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }),
  setFavorite: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default Card;