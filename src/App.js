import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutMain from './layout/index';
// import Main from './layout/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayoutMain />
      </div>
    );
  }
}

export default App;
