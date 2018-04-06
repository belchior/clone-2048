import React, { Component } from 'react';
import './App.css';

import Sidebar from '../Sidebar';
import Wall from '../Wall';

export class App extends Component {
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
