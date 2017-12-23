import React, { Component } from 'react';
import logo from './logo.svg';
import Poem from './Poem'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PENDING</h1>
        </header>
        <Poem label="A Lovely Poem"/>
      </div>
    );
  }
}

export default App;
