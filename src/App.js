import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
