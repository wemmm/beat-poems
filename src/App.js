import React, { Component } from 'react';
import Poem from './Poem';
import Background from './Background';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beat Poems</h1>
        </header>
        <Background/>
        <Poem/>
      </div>
    );
  }
}

export default App;
