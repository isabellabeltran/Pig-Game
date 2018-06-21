import React from 'react';
import ReactDOM from 'react-dom';
import Dice from '../components/Dice';

it('renders the dice component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dice />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders the dice component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dice />, div);
  ReactDOM.unmountComponentAtNode(div);
})