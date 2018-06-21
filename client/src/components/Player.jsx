import React, { Component } from 'react'; 

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  /**
   * Player 
   * current score while rolling the dice 
   * accumulated score after hold 
   */

  render() {
    const { currentScoreOne, currentPlayer, totalScoreOne } = this.props; 
    return(
      <div>
        <div className="totalScore">
          {totalScoreOne}
        </div>
        <div className="currentScore">
          {currentScoreOne}
        </div>  
      </div> 
    ) 
  }
}