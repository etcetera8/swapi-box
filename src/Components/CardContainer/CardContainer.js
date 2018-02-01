import React from 'react';
import Card from '../Card/Card'
import PlanetCard from '../PlanetCard/PlanetCard'
import './CardContainer.css';

const CardContainer = ({people, planets, vehicles, favorites, setFavorite}) => {
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

  return (
    <section className='CardContainer'> 
    {people.length === 0 &&
      <p>welcome</p>
    }
    {peopleCards}
    {planetCards}
    </section>
  )
}

export default CardContainer;