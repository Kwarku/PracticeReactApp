import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator.js';
import Char from './Char/Char.js';

class App extends Component {
state ={
  
}

changeParagraphTextHanlder = (event) => {
  let tempText = event.target.value;
  this.setState({
    text: tempText,
    textSize : tempText.length 
  })
}

  render() {
    return (
      <div className="App">
        <input onChange={this.changeParagraphTextHanlder} value={this.state.text} type="text" />
        <p>{this.state.textSize}</p>
        <Validator size={this.state.textSize}/>
        <Char />
      </div>
    );
  }
}

export default App;
