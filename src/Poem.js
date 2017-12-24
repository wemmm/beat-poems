import React, { Component } from 'react';
import lines from './lines.json';
import './Line.css';

class Poem extends Component {
  constructor() {
    super();
    this.state = {
      poemLineOne: this.randomNumber(),
      poemLineTwo: this.randomNumber(),
      poemLineThree: this.randomNumber()
    }
  }

  randomNumber = () => {
    return Math.floor(Math.random() * (7 - 0)) + 0;
  }

  shuffleLines = () => {
    this.setState({
      poemLineOne: this.randomNumber(),
      poemLineTwo: this.randomNumber(),
      poemLineThree: this.randomNumber()
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.label}</p>
        <h2>{lines.line1[this.state.poemLineOne]}</h2>
        <h2>{lines.line2[this.state.poemLineTwo]}</h2>
        <h2>{lines.line3[this.state.poemLineThree]}</h2>
        <input
          type="button"
          onClick={this.shuffleLines}
        />
      </div>
  )};
}

export default Poem;
