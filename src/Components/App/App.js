import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log("hi")
    fetch()
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
