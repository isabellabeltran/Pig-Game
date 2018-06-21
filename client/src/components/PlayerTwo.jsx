import React, { Component } from 'react'; 

export default class PlayerTwo extends Component {
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
    const { currentPlayer, currentScoreTwo, totalScoreTwo } = this.props; 
    return(
      <div>
        <div>
          <div className="totalScore">
            {totalScoreTwo}
          </div>
          <div className="currentScore">
            {currentScoreTwo}
          </div>  
        </div>
      </div> 
    ) 
  }
}