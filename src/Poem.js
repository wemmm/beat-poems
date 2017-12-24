import React, { Component } from 'react';
import lines from './lines.json';
import './Line.css';

class Poem extends Component {
  constructor() {
    super();
    this.state = {
      poemLineOne: 0,
      poemLineTwo: 0,
      poemLineThree: 0
    }
  }

  randomNumber = () => {
    return Math.floor(Math.random() * (3 - 0)) + 0;
  }

  shuffleLines = () => {
    this.setState({
      poemLineOne: this.randomNumber()
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.label}</p>
        <h2>{lines.line1[this.state.poemLineOne]}</h2>
        <h2>{lines.line2[0]}</h2>
        <h2>{lines.line3[2]}</h2>
        <input
          type="button"
          onClick={this.shuffleLines}
        />
      </div>
  )};
}

export default Poem;
