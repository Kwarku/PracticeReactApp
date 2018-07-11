import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
