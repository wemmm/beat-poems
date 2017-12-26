import React, { Component } from 'react';
import { TiArrowShuffle, TiStarburstOutline, TiLockOpenOutline, TiLockClosedOutline } from 'react-icons/lib/ti'
import lines from './lines.json';
import './Line.css';

class Poem extends Component {
  constructor() {
    super();
    this.state = {
      poemLineOne: this.randomNumber(),
      poemLineTwo: this.randomNumber(),
      poemLineThree: this.randomNumber(),
      lineOneLock: false,
      lineTwoLock: false,
      lineThreeLock: false
    }
  }

  randomNumber = () => {
    return Math.floor(Math.random() * (10 - 0)) + 0;
  }

  shuffleLines = () => {
    this.shuffleLineOne()
    this.shuffleLineTwo()
    this.shuffleLineThree()
  }

  shuffleLineOne = () => {
    if (this.state.lineOneLock === false) {
      this.setState({
        poemLineOne: this.randomNumber()
      });
    }
  }

  shuffleLineTwo = () => {
    if (this.state.lineTwoLock === false) {
      this.setState({
        poemLineTwo: this.randomNumber()
      });
    }
  }

  shuffleLineThree = () => {
    if (this.state.lineThreeLock === false) {
      this.setState({
        poemLineThree: this.randomNumber()
      });
    }
  }

  lockLineOne = () => {
    if (this.state.lineOneLock === false) {
      this.setState({
        lineOneLock: true
      });
    } else {
      this.setState({
        lineOneLock: false
      });
    }
  }

  lockLineTwo = () => {
    if (this.state.lineTwoLock === false) {
      this.setState({
        lineTwoLock: true
      });
    } else {
      this.setState({
        lineTwoLock: false
      });
    }
  }

  lockLineThree = () => {
    if (this.state.lineThreeLock === false) {
      this.setState({
        lineThreeLock: true
      });
    } else {
      this.setState({
        lineThreeLock: false
      });
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.label}</p>

        <h2 className="line1">{lines.line1[this.state.poemLineOne]}</h2><button onClick={this.shuffleLineOne}><TiArrowShuffle/></button>
        <button onClick={this.lockLineOne}><TiLockOpenOutline/></button>

        <h2 className="line2">{lines.line2[this.state.poemLineTwo]}</h2><button onClick={this.shuffleLineTwo}><TiArrowShuffle/></button>
        <button onClick={this.lockLineTwo}><TiLockOpenOutline/></button>

        <h2 className="line2">{lines.line3[this.state.poemLineThree]}</h2><button onClick={this.shuffleLineThree}>< TiArrowShuffle/></button>
        <button onClick={this.lockLineThree}><TiLockOpenOutline/></button><br /><br />

        <button onClick={this.shuffleLines}>
          <TiStarburstOutline/>
        </button>

      </div>
  )};
}

export default Poem;
