import React, { Component } from 'react';
import SongsTable from './SongsTable'
import FilterWrapper from './FilterWrapper'
import logo from '../data/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterWrapper {...this.props}/>
        <SongsTable {...this.props} />
      </div>
    );
  }
}

export default App;
