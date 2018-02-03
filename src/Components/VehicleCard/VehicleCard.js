import React from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({name, model, passengers, vehicle_class, setFavorite, className}) => {

  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'vehicles')} className={`favorite ${className}`}>★</button>
      </header>
      <ul className="categories">
       <li><span className='key'>Model:</span> {model}</li>
       <li><span className='key'>Vehicle Class:</span> {vehicle_class}</li>
       <li><span className='key'>Passeners:</span> {passengers}</li>
      </ul> 
    </article>
  )
}

VehicleCard.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  vehicle_class: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

export default VehicleCard;