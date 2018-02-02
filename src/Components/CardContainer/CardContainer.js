import React from 'react';
import Card from '../Card/Card';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import './CardContainer.css';

const CardContainer = ({people, planets, vehicles, favorites, setFavorite, activeCategory}) => {
  console.log('favorties' ,favorites);
  const favorited = (favorited) => {
    const match = favorites.find(card => card.favorite === favorited)
    return match ? "favorited" : "";
  }

  const peopleCards = people.map((person, index) => 
    <Card 
      className={favorited(person.favorite)}
      setFavorite={setFavorite}
      name={person.name}
      species={person.species}
      homeworld={person.homeworld}
      population={person.population}
      key={index} />
  )

  const planetCards = planets.map((planet, index) => {
    return <PlanetCard
      className={favorited(planet.favorite)}
      setFavorite={setFavorite}
      name={planet.name}
      climate={planet.climate}
      terrain={planet.terrain}
      population={planet.population}
      residents={planet.residents}
      key={index}
    />
  })

  const vehicleCards = vehicles.map((vehicle, index) => {
    return <VehicleCard 
      className={favorited(vehicle.favorite)}
      setFavorite={setFavorite}
      name={vehicle.name}
      model={vehicle.model}
      passengers={vehicle.passengers}
      vehicle_class={vehicle.vehicle_class}     
    />
  })

  const favoriteCards = favorites.map((card, index) => {
    if (card.category === 'people') {
      return  <Card 
        className={favorited(card.favorite)}
        setFavorite={setFavorite}
        name={card.name}
        species={card.species}
        homeworld={card.homeworld}
        population={card.population}
        key={index} />
    } else if (card.category === 'vehicles') {
      return <VehicleCard
        className={favorited(card.favorite)}
        setFavorite={setFavorite}
        name={card.name}
        model={card.model}
        passengers={card.passengers}
        vehicle_class={card.vehicle_class}     
      />
    }
  })

  console.log(favoriteCards);

  if (activeCategory==='planets') {
    return (
      <section className='CardContainer'>
        {planetCards}
      </section>
    )
  }

  if (activeCategory === null) {
    return (
      <section className='CardContainer'> 
        <p>welcome</p>
      </section>
    ) 
  }

  if (activeCategory=== 'people') {
    return (
      <section className='CardContainer'> 
        {peopleCards}
      </section>
    )
  }

  if (activeCategory === 'vehicles') {
    return (
      <section className='CardContainer'>
        {vehicleCards}
      </section>
    )
  }

  if (activeCategory === 'favorites') {
    return (
      <section className='CardContainer'>
        {favoriteCards}
      </section>
    )
  }
}

export default CardContainer;