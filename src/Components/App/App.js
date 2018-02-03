import React, { Component } from 'react';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import CardContainer from '../CardContainer/CardContainer';
import Button from '../Button/Button';
import Cleaner from '../../helper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollText: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      activeCategory: null
    }
    this.cleaner = new Cleaner()
  }

  componentDidMount() {
    try {
     //this.apiCall('films');
    }
    catch(err) {
      return 'err'
    }
  }

  apiCall(resource) {
    const randNum = this.cleaner.randomMovieNumber();
    fetch(`https://swapi.co/api/${resource}/${randNum}`)
    .then( response => response.json())
    .then( json => {
      this.setState({ scrollText: this.cleaner.randomMovieCall(json) })
    })
  }

  setPeopleState = async () => {
    if (!localStorage.getItem('people')) {
      const people = await this.cleaner.getPeople()
      this.setState({people})
      localStorage.setItem('people', JSON.stringify(people))
    } else if (this.state.people.length === 0) {
      console.log('from loc');
      this.setState({people: JSON.parse(localStorage.getItem("people"))})
    } else {
      this.setState({people: this.state.people})
    }
    this.setState({activeCategory: "people"})
  }

  setPlanetState = async () => {
    if (!localStorage.getItem('planets')) { 
      const planets = await this.cleaner.getPlanets()
      this.setState({planets})
      localStorage.setItem('planets', JSON.stringify(planets))
    } else if (this.state.planets.length === 0) {
      console.log("from loc");
      this.setState({planets: JSON.parse(localStorage.getItem('planets'))})
    } else {
      this.setState({planets: this.state.planets})
    } 
    this.setState({activeCategory: "planets"})
  }

  setVehicleState = async () => {
    if (!localStorage.getItem('vehicles')) {
      const vehicles = await this.cleaner.getVehicles()
      this.setState({vehicles})
      localStorage.setItem('vehicles', JSON.stringify(vehicles))
    } else if (this.state.vehicles.length === 0 ){
      console.log('from loc');
      this.setState({vehicles: JSON.parse(localStorage.getItem('vehicles'))})
    } else {
      this.setState({vehicles: this.state.vehicles})
    }

    this.setState({activeCategory: "vehicles"})
  }

  setFavoriteState = (cardName, category) => {
    const {favorites} = this.state;

    const target = this.state[category].find(card => { 
      card.name === cardName ? card.favorite = true : null;
      return card.name === cardName;
    });
    
    const filtered = this.state.favorites.filter(card => {
      return card.name !== target.name
    })

    if (favorites.includes(target)) {
      target.favorite = false;
      console.log(this.state[category].includes(target))
      this.setState({favorites: filtered })
    } else {
      const favoriteCards = [...favorites, target];
      this.setState({favorites: favoriteCards });
    }
  }

  setCategory = () => {
    this.setState({activeCategory: "favorites"})
  }

  activeStatus = (category) => {
    return this.state.activeCategory === category ?  
      `active${category}` : ""
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer movieData={this.state.scrollText}/>
        <nav className="button-container">
          <Button
            name="people"
            resourceCall={this.setPeopleState}
            className={this.activeStatus('people')}
            />
          <Button 
            name="planets"
            resourceCall={this.setPlanetState}
            className={this.activeStatus('planets')}
            />
          <Button 
            name="vehicles"
            resourceCall={this.setVehicleState}
            className={this.activeStatus('vehicles')}/>
          <button 
            onClick={this.setCategory}
            className={`Button ${this.activeStatus('favorites')}`}
            >
            {this.state.favorites.length} Favorites
          </button>
        </nav>
        <CardContainer
          activeCategory={this.state.activeCategory}
          setFavorite={this.setFavoriteState}
          favorites={this.state.favorites}
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;
