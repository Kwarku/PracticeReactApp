import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
state = {
  users:[
    {name:'Paweł', city:'Szczecin'},
    {name:'Michał', city:'Kraków'},
  ]
}
changeCityHanlder = (cityName) => {
  this.setState({
    users:[
      {name:'Paweł', city:'Szczecin'},
      {name:'Michał', city:cityName},
    ]
  })
}

render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name={this.state.users[0].name} city={this.state.users[0].city}/>
        <UserOutput name={this.state.users[1].name} city={this.state.users[1].city}/>
        <button onClick={this.changeCityHanlder.bind(this,"Kołobrzeg")}>Change City </button>
      </div>
    );
  }
}

export default App;
