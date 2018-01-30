import React, { Component } from 'react';
import Header from '../Header/Header';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import CardContainer from '../CardContainer/CardContainer';
import Cleaner from '../../helper';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollText: "",
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
    this.cleaner = null
  }


  componentDidMount() {
    console.log("hi")
    this.apiCall('films')
  }

  apiCall(resource) {
    const root = `https://swapi.co/api/`
    fetch(`${root}${resource}`)
    .then( response => response.json())
    .then( json => {
      this.cleaner = new Cleaner(json);
      this.cleaner.randomMovieCall(json.results)

    })
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
