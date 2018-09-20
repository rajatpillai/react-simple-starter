import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


class Main extends Component {

  state = {
    toggle: false,
  };

  function = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.props.history.push('/test')} className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.function()}></button>
      </div>
    );
  }
}

export default Main;
