import React, { Component } from 'react';
import { TiArrowShuffle, TiStarburstOutline, TiLockOpenOutline } from 'react-icons/lib/ti'
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

  shuffleLineOne = () => {
    this.setState({
      poemLineOne: this.randomNumber()
    });
  }

  shuffleLineTwo = () => {
    this.setState({
      poemLineTwo: this.randomNumber()
    });
  }

  shuffleLineThree = () => {
    this.setState({
      poemLineThree: this.randomNumber()
    });
  }

  render() {
    return (
      <div>
        <p>{this.props.label}</p>

        <h2>{lines.line1[this.state.poemLineOne]}</h2><button onClick={this.shuffleLineOne}><TiArrowShuffle/></button>
        <button><TiLockOpenOutline/></button>

        <h2>{lines.line2[this.state.poemLineTwo]}</h2><button onClick={this.shuffleLineTwo}><TiArrowShuffle/></button>
        <button><TiLockOpenOutline/></button>

        <h2>{lines.line3[this.state.poemLineThree]}</h2><button onClick={this.shuffleLineThree}>< TiArrowShuffle/></button>
        <button><TiLockOpenOutline/></button><br /><br />

        <button onClick={this.shuffleLines}>
          <TiStarburstOutline/>
        </button>

      </div>
  )};
}

export default Poem;
