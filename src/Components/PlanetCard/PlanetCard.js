import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css'
const PlanetCard = ({planet, setFavorite, className}) => {
  const {name, climate, terrain, population, residents} = planet;
  let resString = ''
  if (residents.length === 0) {
    resString = 'N/A'
  } else {
    resString = residents.join(", ")
  }

  return (
    <article className='Card PlanetCard'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'planets')} className={`favorite ${className}`}>★</button>
      </header>
      <ul className="categories">
        <li><span className='key'>Climate:</span>{climate}</li>
        <li><span className='key'>Terrain:</span>  {terrain}</li>
        <li><span className='key'>Population:</span> {population}</li>
        <li><span className='key'>Residents:</span> {resString}</li>
      </ul> 
    </article>
  )
}

PlanetCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    residents: PropTypes.array.isRequired
  }),
  setFavorite: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

export default PlanetCard;