import React from 'react';
import PropTypes from 'prop-types';

const PlanetCard = ({name, climate, terrain, population, residents, setFavorite, className}) => {
  let resString = ''
  if (residents.length === 0) {
    resString = 'N/A'
  } else {
    resString = residents.join(", ")
  }

  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'planets')} className={`favorite ${className}`}>x</button>
      </header>
      <ul className="categories">
        <li>Climate {climate}</li>
        <li>Terrain: {terrain}</li>
        <li>Population: {population}</li>
        <li>Residents: {resString}</li>
      </ul> 
    </article>
  )
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

export default PlanetCard;