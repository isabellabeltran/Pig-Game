import React, { Component } from 'react';
import Dice from './components/Dice'; 
import Player from './components/Player'; 
import PlayerTwo from './components/PlayerTwo'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScoreOne: 0,
      totalScoreOne: 0, 
      currentPlayer: 'player1',
      winner: false,
      currentScoreTwo: 0,
      totalScoreTwo: 0,
      playerWinner: ''
    }
  }

  handleRollDice = (newDice) => { 
    if (this.state.totalScoreOne >= 20) {
      this.setState({
        winner: true
      })
      alert('Player 1 is the winner!!!')
    } else if (this.state.totalScoreTwo >= 20 ) {
      this.setState({
        winner: true
      })
      alert('Player 2 is the winner!!!')
    } else {
      if (this.state.currentPlayer === 'player1' && this.state.winner === false) {
        // if (this.state.totalScoreOne >= 20) {
        //   this.setState({
        //     winner: true,
        //     playerWinner: 'player1'
        //   }); 
        //   alert('Player 1 is the winner'); 
        // } else {
          if (newDice !== 1) {
            this.setState({
              currentScoreOne: this.state.currentScoreOne + newDice
            });
          } else {
            this.setState({
              currentPlayer: 'player2',
              currentScoreOne: 0 
            });
          }
        // }
      // } else if (this.state.currentPlayer === 'player2' && this.state.winner === false) {
        // if (this.state.totalScoreTwo >= 20) {
        //   this.setState({
        //     winner: true,
        //     playerWinner: 'player2'
        //   }); 
        //   alert('Player 2 is the winner'); 
        } else {
          if (newDice !== 1) {
            this.setState({
              currentScoreTwo: this.state.currentScoreTwo + newDice
            });
          } else {
            this.setState({
              currentPlayer: 'player1', 
              currentScoreTwo: 0 
            });
          }
        }
    } 
  }

  holdCurrentScore = () => {
    //It's next player's turn 
    if (this.state.currentPlayer === 'player1') {
      if (this.state.currentScoreOne >= 20 || this.state.totalScoreOne >= 20 ) {
        this.setState({
          winner: true
        }); 
        alert('We have a winner'); 
      } else {
        this.setState({
          totalScoreOne: this.state.totalScoreOne + this.state.currentScoreOne,
          currentScoreOne: 0,
          currentPlayer: 'player2'
        }); 
      }

    } else if (this.state.currentPlayer === 'player2') {
      if (this.state.currentScoreTwo >= 20 || this.state.totalScoreTwo >= 20 ) {
        this.setState({
          winner: true
        }); 
        alert('We have a winner'); 
      } else {
        this.setState({
          totalScoreTwo: this.state.totalScoreTwo + this.state.currentScoreTwo,
          currentScoreTwo: 0,
          currentPlayer: 'player1'
        }); 
      }
    }
  } 

  createNewGame = () => {
    this.setState({
      currentScoreOne: 0,
      totalScoreOne: 0, 
      currentPlayer: 'player1',
      winner: false,
      currentScoreTwo: 0,
      totalScoreTwo: 0,
      playerWinner: ''
    });
  }

  render() {
    const { currentPlayer, currentScoreOne, totalScoreOne, totalScoreTwo, currentScoreTwo} = this.state; 
    return (
      <div className="App">

        <div className="gameContainer">

          <div className="player-1-panel">
          <h1 className="player-header">Player 1</h1>
          <Player currentScoreOne={currentScoreOne} totalScoreOne={totalScoreOne} currentPlayer={currentPlayer} />
          </div>
          <div className="player-2-panel">
          <h1 className="player-header">Player 2</h1>
          <PlayerTwo currentScoreTwo={currentScoreTwo} totalScoreTwo={totalScoreTwo} currentPlayer={currentPlayer} />
          </div>

          {
            this.state.winner ? 
            null
            :
          <div className="rollTheDice">
            <Dice funcRoll={this.handleRollDice.bind(this)} />
          </div>
          }

          <div onClick={this.createNewGame} className="newGame">
          <h3>NEW GAME</h3>
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
