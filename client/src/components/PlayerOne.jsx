import React, { Component } from 'react'; 


export default class PlayerOne extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /**
   * Player 
   * current score while rolling the dice 
   * accumulated score after hold 
   */

  render() {
    const { currentScore, currentPlayer, totalScore } = this.props; 
    return(
      <div>
      <div>
        <h1>Player 1</h1>
      </div>
      <div className="totalScore">
        {totalScore}
      </div>
      <div className="currentScore">
        {currentScore}
      </div>  
      </div> 
    ) 
  }
}