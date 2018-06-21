import React, { Component } from 'react';
// import logo from './logo.svg';
import Dice from './components/Dice'; 
import Player from './components/Player'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNumber: 0
    }
  }

  handleRollDice = (newDice) => {
      this.setState({
        diceNumber: this.state.diceNumber + newDice
      });
  }

  render() {
    return (
      <div className="App">
        <div className="gameContainer">
        <div className="player">
        <Player />
        </div>
        <div className="rollTheDice">
          <Dice funcRoll={this.handleRollDice.bind(this)} />
        </div>
        <div>
          <h1>{this.state.diceNumber}</h1>
        </div>
        <div className="holdSum">
        </div>
        </div>
      </div>
    );
  }
}

export default App;
