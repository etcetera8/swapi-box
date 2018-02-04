import React from 'react';
import Card from '../Card/Card';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({people, planets, vehicles, favorites, setFavorite, activeCategory}) => {

  const favorited = (favorited) => {
    const match = favorites.find(card => card.favorite === favorited)
      return match ? "favorited" : "";
  }

  const peopleCards = people.map((person, index) => 
    <Card 
      className={favorited(person.favorite)}
      setFavorite={setFavorite}
      person={person}
      key={index} />
  )

  const planetCards = planets.map((planet, index) =>
    <PlanetCard
      className={favorited(planet.favorite)}
      setFavorite={setFavorite}
      planet={planet}
      key={index}
    />
  )

  const vehicleCards = vehicles.map((vehicle, index) =>
   <VehicleCard 
      className={favorited(vehicle.favorite)}
      setFavorite={setFavorite}
      vehicle={vehicle}
      key={index}     
    />
  )

  const favoriteCards = favorites.map((card, index) => {
    let pick = '';
    if (card.category === 'people') {
      pick = <Card 
        className={favorited(card.favorite)}
        setFavorite={setFavorite}
        person={card}
        key={index} />
    } else if (card.category === 'vehicles') {
      pick = <VehicleCard
        className={favorited(card.favorite)}
        setFavorite={setFavorite}
        vehicle={card}
        key={index}    
      />
    }
    else if (card.category === "planets") {
      pick = <PlanetCard
        className={favorited(card.favorite)}
        setFavorite={setFavorite}
        planet={card}
        key={index}
      />
      }
      return pick;
    })

    return (
     <section className='CardContainer'> 
      { activeCategory === null &&
        <h2 className="message">Welcome! <br /> <br /> Choose a category to get started with exploring the Star Wars Universe</h2>
      } 
      {activeCategory === 'people' && 
        peopleCards
      }
      {activeCategory === 'planets' && 
        planetCards
      }
      {activeCategory === 'vehicles' && 
        vehicleCards
      }
      {activeCategory === 'favorites' && favoriteCards.length === 0 && 
          <h2 className="message">No favorites selected <br /> <br /> Find some and come back here to see them!</h2>
      }
      {activeCategory === 'favorites' && favoriteCards.length > 0 && 
        favoriteCards
      }
      </section>
    ) 
}

CardContainer.propTypes = {
  people: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
  activeCategory: PropTypes.string
};

export default CardContainer;