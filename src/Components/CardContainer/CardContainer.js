import React from 'react';
import Card from '../Card/Card'
import PlanetCard from '../PlanetCard/PlanetCard'
import './CardContainer.css';

const CardContainer = ({people, planets, vehicles, favorites, setFavorite, activeCategory}) => {
  console.log(activeCategory);
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

  console.log(peopleCards)

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
  console.log(planetCards);
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
        vehicles
      </section>
    )
  }

  if (activeCategory === 'favorites') {
    return (
      <section className='CardContainer'>
        favorites
      </section>
    )
  }
}

export default CardContainer;