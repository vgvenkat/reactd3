import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axis from './Blackbox';
import HocAxis from './HOC';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HocAxis x="10" y="80"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Axis />
      </div>
    );
  }
}

export default App;
