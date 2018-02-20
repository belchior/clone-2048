import React, { Component } from 'react';
import './App.css';

import { Sidebar } from './components/Sidebar';
import { Wall } from './components/Wall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <main className="main">
          <Wall></Wall>
        </main>
      </div>
    );
  }
}

export default App;
