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
    fetch(`${this.state.root}${resource}/${randNum}`)
    .then( response => response.json())
    .then( json => {
      this.setState({ scrollText: this.cleaner.randomMovieCall(json) })
    })
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer movieData={this.state.scrollText}/>
        <nav className="button-container">
          <Button 
            name="people"
            resourceCall={this.cleaner.getPeople}/>
          <Button 
            name="planets"
            resourceCall={this.resourceCall}/>
          <Button 
            name="vehicles"
            resourceCall={this.resourceCall}/>
        </nav>
        <CardContainer />
      </div>
    );
  }
}

export default App;
