import React, { Component } from 'react';
import Lifecycles from './Lifecycles';
import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: ''
    }
  }

  handleClick = () => {
      this.setState(() => ({text: this.state.text + 'Hello World'}))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button 
         onClick={() => 
           this.setState(state => ({
               showChild: !state.showChild
           }))
         }
        >
          Toggle Lifecycles
        </button>
        <button
          onClick={this.handleClick}
        >
          Update text
        </button>
        {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
      </header>
    </div>
   );
  }
}

export default App1;

