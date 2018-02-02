import React from 'react';

const VehicleCard = ({name, model, passengers, vehicle_class, setFavorite, className}) => {

  return (
    <article className='Card'> 
      <header>
        <h1 className="name">{name}</h1>
        <button onClick={() => setFavorite(name, 'vehicles')} className={`favorite ${className}`}>x</button>
      </header>
      <ul className="categories">
       <li>Model: {model}</li>
       <li>Vehicle Class: {vehicle_class}</li>
       <li>Passeners: {passengers}</li>
      </ul> 
    </article>
  )
}

export default VehicleCard;