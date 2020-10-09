import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meaninOfLife: 30,
    }
  }

  handleClick = () => {
    this.setState((prevStat, prevProps) => { 
      return {meaninOfLife: prevStat.meaninOfLife + prevProps.increment}
    },
       () => console.log(this.state.meaninOfLife))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.meaninOfLife}
        </p>
        <button
          onClick={this.handleClick}
        >
          Update State
        </button>
      </header>
    </div>
   );
  }
}

export default App;
