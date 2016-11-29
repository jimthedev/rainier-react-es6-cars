import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      definitions: []
    }
  }
  onGetDataClick() {
    axios.get('https://api.wordnik.com/v4/word.json/words/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
      .then((response) => {
        this.setState({definitions: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rainier</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onGetDataClick.bind(this)}>Get Data</button>
        <ul>
          {this.state.definitions.map((definition) => {
            return (
              <li>{definition.text}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
