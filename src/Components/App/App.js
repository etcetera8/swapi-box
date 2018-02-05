import React, { Component } from 'react';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import CardContainer from '../CardContainer/CardContainer';
import Button from '../Button/Button';
import Cleaner from '../../helper';
import {fetchAndJson} from '../../api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollText: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      activeCategory: null,
      errorStatus: false
    };
    this.cleaner = new Cleaner();
  }

  componentDidMount() {
    try {
      this.randomMovieScroll('films');
    } catch (error) {
      this.setState({errorStatus: true});
      return 'error';
    }
  }

  randomMovieScroll = async (resource) => {
    const randNum = this.cleaner.randomMovieNumber();
    const movieObject = 
    await fetchAndJson(`https://swapi.co/api/${resource}/${randNum}`);
    this.setState({ scrollText: this.cleaner.randomMovieCall(movieObject) });
  }

  setTheState = async (category, func) => {
    try {
      if (!localStorage.getItem(category)) { 
        const promiseResponse = await func();
        this.setState({[category]: promiseResponse});
        localStorage.setItem(category, JSON.stringify(promiseResponse));
      } else if (this.state[category].length === 0) {
        this.setState({[category]: JSON.parse(localStorage.getItem(category))});
      } else {
        this.setState({[category]: this.state[category]});
      } 
      this.setCategory(category);
    } catch (error) {
      this.setState({errorStatus: true});
      return "error";
    }  
  }

  setFavoriteState = (cardName, category) => {
    let {favorites} = this.state;

    const target = this.state[category].find(card => 
      card.name === cardName ? card.favorite = true : null);
    
    const filtered = favorites.filter(card => 
      card.name !== target.name);

    if (favorites.includes(target)) {
      target.favorite = false;
      this.setState({favorites: filtered });
    } else {
      favorites = [...favorites, target];
      this.setState({favorites});
    }
  }

  setCategory = (category) => {
    this.setState({activeCategory: category});
  }

  activeStatus = (category) => {
    return this.state.activeCategory === category ?  
      `active${category}` : "";
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.errorState === true &&
          <div className="error-div"> 
            <h1 className="error-status">
              Uh oh! There was an error getting the data. 
              Please try reloading the page and choosing your category again.
            </h1>
          </div>
        }
        <ScrollContainer movieData={this.state.scrollText}/>
        <nav className="button-container">
          <Button
            name="people"
            func={this.cleaner.getPeople}
            resourceCall={this.setTheState}
            className={this.activeStatus('people')}
          />
          <Button 
            name="planets"
            func={this.cleaner.getPlanets}
            resourceCall={this.setTheState}
            className={this.activeStatus('planets')}
          />
          <Button 
            name="vehicles"
            func={this.cleaner.getVehicles}
            resourceCall={this.setTheState}
            className={this.activeStatus('vehicles')}/>
          <button 
            onClick={() => this.setCategory('favorites')}
            className={`Button ${this.activeStatus('favorites')}`}
          >
            <span id="num">{this.state.favorites.length}</span> Favorites
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
