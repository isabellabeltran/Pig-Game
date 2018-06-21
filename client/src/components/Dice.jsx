import React, { Component } from 'react'; 
import dice1 from '../style/images/dice1.png';
import dice2 from '../style/images/dice2.png';
import dice3 from '../style/images/dice3.png';
import dice4 from '../style/images/dice4.png';
import dice5 from '../style/images/dice5.png';
import dice6 from '../style/images/dice6.png';

export default class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: dice1
    }
  }

  handleRollDice = () => {
      let diceNumber = Math.floor(Math.random() * 6) + 1; 
        this.props.funcRoll(diceNumber)
      if (diceNumber === 1) {
        this.setState({
          dice: dice1
        });
      } else if (diceNumber === 2) {
        this.setState({
          dice: dice2
        });
      } else if (diceNumber === 3) {
        this.setState({
          dice: dice3
        });
      } else if (diceNumber === 4) {
        this.setState({
          dice: dice4
        });
      } else if (diceNumber === 5) {
        this.setState({
          dice: dice5
        });
      } else if (diceNumber === 6) {
        this.setState({
          dice: dice6
        });
      }
  }

  render() {

    return(
      <div>
        <div>
          <img className="dice" onClick={this.handleRollDice} src={this.state.dice} />
        </div>
      </div> 
    ) 
  }
}