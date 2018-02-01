import React, { Component } from 'react';
//import Header from '../Header/Header';
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
      favorites: []
    }
    this.cleaner = new Cleaner()
  }

  componentDidMount() {
    this.cleaner = new Cleaner();
    //this.apiCall('films')
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
    } else {
      console.log('peep from loc');
      this.setState({people: JSON.parse(localStorage.getItem("people"))})
    }
  }

  setPlanetState = async () => {
    if (!localStorage.getItem('planets')) { 
      const planets = await this.cleaner.getPlanets()
      this.setState({planets})
      localStorage.setItem('planets', JSON.stringify(planets))
    } else {
      console.log("from loc");
      this.setState({planets: JSON.parse(localStorage.getItem('planets'))})
    }
  }

  setVehicleState = async () => {
    if (!localStorage.getItem('vehicles')) {
      const vehicles = await this.cleaner.getVehicles()
      this.setState({vehicles})
      localStorage.setItem('vehicles', JSON.stringify(vehicles))
    } else {
      this.setState({vehicles: JSON.parse(localStorage.getItem('vehicles'))})
    }
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer movieData={this.state.scrollText}/>
        <nav className="button-container">
          <Button 
            name="people"
            resourceCall={this.setPeopleState}/>
          <Button 
            name="planets"
            resourceCall={this.setPlanetState}/>
          <Button 
            name="vehicles"
            resourceCall={this.setVehicleState}/>
        </nav>
        <CardContainer
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;
