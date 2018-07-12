import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator.js';
import Char from './Char/Char.js';

class App extends Component {
state ={
  text : null,
  textSize : null,
  letters : []
}

changeParagraphTextHanlder = (event) => {
  const tempWord = event.target.value;
  const size = tempWord.length;
  const tempArray = [...this.state.letters];
  tempArray[size-1] = {
    value : (tempWord.slice(size-1,size)),
    key: (Math.random()*100)
  }

  this.setState({
    text: tempWord,
    textSize : size,
    letters : tempArray,
  })

}

deleteElementHanlder = (id) =>{
  const letterIndex = this.state.letters.findIndex(l=>{
    return l.key === id;
  })
  let tempLetters = [...this.state.letters];
  tempLetters[letterIndex].value = '';

  let tempText = '';
  tempLetters.map(l => {
    if(l.value !== ''){
      tempText = tempText+l.value;
    }
    return tempText;
  })

  this.setState({
    letters: tempLetters,    
    text:tempText,
    textSize : tempText.length,
  })
}

  render() {
    
    let showLetter = null;
    if(this.state.textSize > 0){
      showLetter = 
         ( <div>   
            {this.state.letters.map(letter =>{
              if(letter.value === ''){
                return null;
              }else{
                return <Char 
                delete={() =>this.deleteElementHanlder(letter.key)} 
                text={letter.value}
                key={letter.key}/>
              }

              
            })}
          </div>
         )
      }

    return (
      <div className="App">
        <input onChange={this.changeParagraphTextHanlder} value={this.state.text} type="text" />
        <p>{this.state.textSize}</p>
        <Validator size={this.state.textSize}/>
        {showLetter}
      </div>
    );
  }
}

export default App;
