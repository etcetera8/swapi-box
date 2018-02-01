import React from 'react';
//import './PlanetCard.css';

const PlanetCard = ({name, climate, terrain, population, residents, setFavorite, className}) => {
  //console.log(name);
  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'people')} className={`favorite ${className}`}>x</button>
      </header>
      <ul className="categories">
        <li>Climate {climate}</li>
        <li>Terrain: {terrain}</li>
        <li>Population: {population}</li>
      </ul> 
    </article>
  )
}

export default PlanetCard;