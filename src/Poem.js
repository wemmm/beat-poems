import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { TiArrowShuffle, TiRefresh, TiLockOpenOutline, TiLockClosedOutline } from 'react-icons/lib/ti'
import lines from './lines.json';

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
    return Math.floor(Math.random() * (12 - 0)) + 0;
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

        <h2 className="line1">{lines.line1[this.state.poemLineOne]}</h2>
        <Button onClick={this.shuffleLineOne}><TiArrowShuffle/>Shuffle</Button>
        <Button className={(this.state.lineOneLock ? "active" : "")} onClick={this.lockLineOne}><TiLockClosedOutline/>Lock</Button>

        <h2 className="line2">{lines.line2[this.state.poemLineTwo]}</h2>
        <Button onClick={this.shuffleLineTwo}><TiArrowShuffle/>Shuffle</Button>
        <Button className={(this.state.lineTwoLock ? "active" : "")} onClick={this.lockLineTwo}><TiLockClosedOutline/>Lock</Button>

        <h2 className="line2">{lines.line3[this.state.poemLineThree]}</h2>
        <Button onClick={this.shuffleLineThree}>< TiArrowShuffle/>Shuffle</Button>
        <Button className={(this.state.lineThreeLock ? "active" : "")} onClick={this.lockLineThree}><TiLockClosedOutline/>Lock</Button><br /><br />

        <Button className="line-options" onClick={this.shuffleLines}>
          Shuffle All
          <TiRefresh/>
        </Button>

      </div>
  )};
}

export default Poem;
