import React, { Component } from 'react'; 


export default class Player extends Component {
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
    return(
      <div>
      <div>
        <h1>Player 1</h1>
      </div>
      <div className="totalScore">
        
      </div>
      <div className="currentScore">
        
      </div>  
      </div> 
    ) 
  }
}