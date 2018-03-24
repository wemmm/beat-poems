import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col } from 'react-bootstrap';
import ShareButton from 'react-social-share-buttons'
import { TiArrowShuffle, TiRefresh, TiLockClosedOutline, TiLockOpenOutline } from 'react-icons/lib/ti'
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
    return Math.floor(Math.random() * lines.line1.length);
  }

  shuffleLines = () => {
    this.shuffleLineOne()
    this.shuffleLineTwo()
    this.shuffleLineThree()
  }

  shuffleLineOne = () => {
    if (!this.state.lineOneLock) {
      this.setState({
        poemLineOne: this.randomNumber()
      });
    }
  }

  shuffleLineTwo = () => {
    if (!this.state.lineTwoLock) {
      this.setState({
        poemLineTwo: this.randomNumber()
      });
    }
  }

  shuffleLineThree = () => {
    if (!this.state.lineThreeLock) {
      this.setState({
        poemLineThree: this.randomNumber()
      });
    }
  }

  lockLineOne = () => {
    if (!this.state.lineOneLock) {
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
    if (!this.state.lineTwoLock) {
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
    if (!this.state.lineThreeLock) {
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
     <Grid>
      <div>
        <p>{this.props.label}</p>

      <Col xs={12} md={8}>
        <h2>{lines.line1[this.state.poemLineOne]}</h2>
      </Col>

      <Col xs={6} md={4}>
        <ButtonGroup>
          <Button onClick={this.shuffleLineOne}><TiArrowShuffle/>Shuffle</Button>
          <Button
            className={(this.state.lineOneLock ? "active" : "")}
            onClick={this.lockLineOne}>
            {
              this.state.lineOneLock ?
              <TiLockClosedOutline/> :
              <TiLockOpenOutline/>
            }
          </Button>
        </ButtonGroup>
      </Col>

      <Col xs={12} md={8}>
        <h2>{lines.line2[this.state.poemLineTwo]}</h2>
      </Col>

      <Col xs={6} md={4}>
        <ButtonGroup>
          <Button onClick={this.shuffleLineTwo}><TiArrowShuffle/>Shuffle</Button>
          <Button
            className={(this.state.lineTwoLock ? "active" : "")}
            onClick={this.lockLineTwo}>
            {
              this.state.lineTwoLock ?
              <TiLockClosedOutline/> :
              <TiLockOpenOutline/>
            }
          </Button>
        </ButtonGroup>
      </Col>

      <Col xs={12} md={8}>
        <h2>{lines.line3[this.state.poemLineThree]}</h2>
      </Col>

      <Col xs={6} md={4}>
        <ButtonGroup>
          <Button onClick={this.shuffleLineThree}><TiArrowShuffle/>Shuffle</Button>
          <Button
            className={(this.state.lineThreeLock ? "active" : "")}
            onClick={this.lockLineThree}>
            {
              this.state.lineThreeLock ?
              <TiLockClosedOutline/> :
              <TiLockOpenOutline/>
            }
            </Button>
        </ButtonGroup>
      </Col>

      <Col xs={12} md={8}>
        <div className="lowerbuttons">
        <Button className="shuffleall" onClick={this.shuffleLines}>
          Shuffle All
          <TiRefresh/>
        </Button>

        <div className="social">
          <ShareButton
                  socialMedia={'twitter'}
                  compact
                  url={"lmao"}
                  text={`${lines.line1[this.state.poemLineOne]}%0A${lines.line2[this.state.poemLineTwo]}%0A${lines.line3[this.state.poemLineThree]}`}
              />
        </div>
        </div>
      </Col>

      </div>
      </Grid>
  )};
}

export default Poem;
