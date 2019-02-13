import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutMain from './layout/index';
import { BrowserRouter } from 'react-router-dom'
// import Main from './layout/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LayoutMain />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
