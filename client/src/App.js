import React, { Component } from 'react';
import Dice from './components/Dice'; 
import PlayerOne from './components/PlayerOne'; 
import PlayerTwo from './components/PlayerTwo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      totalScore: 0, 
      currentPlayer: 'player1',
      winner: false
    }
  }

  handleRollDice = (newDice) => {
    // if (newDice !== 1) {
      this.setState({
        currentScore: this.state.currentScore + newDice
      });
    // } else {
    //   this.setState({
    //     currentPlayer: 'player2'
    //   })
    // }
  }

  holdCurrentScore = () => {
    //It's next player's turn 
    this.setState({
      totalScore: this.state.totalScore + this.state.currentScore,
      currentScore: 0
    }); 

  } 

  render() {
    const { currentScore, currentPlayer, totalScore } = this.state; 
    return (
      <div className="App">

        <div className="gameContainer">

          <div className="player-1-panel">
          <PlayerOne currentScore={currentScore} totalScore={totalScore} currentPlayer={currentPlayer}/>
          </div>
          <div className="player-2-panel">
          <PlayerTwo currentScore={currentScore} totalScore={totalScore} currentPlayer={currentPlayer} />
          </div>

          {
            this.state.winner ? 
            null
            :
          <div className="rollTheDice">
            <Dice funcRoll={this.handleRollDice.bind(this)} />
          </div>
          }

          <div className="newGame">
          <h3>New Game</h3>
          </div>

          <div onClick={this.holdCurrentScore} className="holdSum">
            <h3>HOLD</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
