import React, { Component } from 'react';
import Header from '../Header/Header';
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
    this.cleaner = null
  }

  componentDidMount() {
    this.cleaner = new Cleaner();
    console.log("hi")
    //this.apiCall('films')
  }

  apiCall(resource) {
    const randNum = this.cleaner.randomMovieNumber();
    const root = `https://swapi.co/api/`
    fetch(`${root}${resource}/${randNum}`)
    .then( response => response.json())
    .then( json => {
      this.setState({ scrollText: this.cleaner.randomMovieCall(json) })
    })
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer movieData={this.state.scrollText}/>
        <Header />
        <div>
          <Button name="People"/>
          <Button name="Planets"/>
          <Button name="Vehicles"/>
        </div>
        <CardContainer />
      </div>
    );
  }
}

export default App;
