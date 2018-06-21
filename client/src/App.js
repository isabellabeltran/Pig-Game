import React, { Component } from 'react';
import logo from './logo.svg';
import Dice from './components/Dice'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World from create React App
        <div>
          <Dice />
        </div>
      </div>
    );
  }
}

export default App;
