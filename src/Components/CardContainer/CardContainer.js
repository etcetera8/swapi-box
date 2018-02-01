import React from 'react';
import Card from '../Card/Card'
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

  return (
    <section className='CardContainer'> 
    {people.length === 0 &&
      <p>welcome</p>
    }
    {peopleCards}
    </section>
  )
}

export default CardContainer;