import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator.js';
import Char from './Char/Char.js';

class App extends Component {
  state = {
    text: '',
  }

  changeParagraphTextHanlder = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  deleteElementHanlder = (index) => {
    let letters = this.state.text.split('');
    letters.splice(index,1);
    const updateText = letters.join('');

    this.setState({
      text: updateText,
    })
  }

  render() {

    let showLetter = (<div>
      {this.state.text.split('').map((ch, index) => {
        return <Char
          delete={() => this.deleteElementHanlder(index)}
          text={ch}
          key={index} />
      })}
    </div>)


    return (
      <div className="App">
        <input
          onChange={this.changeParagraphTextHanlder}
          value={this.state.text}
          type="text" />

        <p>{this.state.text.length}</p>
        <Validator size={this.state.text.length} />
        {showLetter}
      </div>
    );
  }
}

export default App;
