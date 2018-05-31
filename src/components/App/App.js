import React, { Component } from 'react';

import { move } from '../../actions/move';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import './App.css';


export class App extends Component {
  render() {

    return (
      <Keyboard shortcuts={[
        {shortcut: 'arrow-down', action: move('bottom')},
        {shortcut: 'arrow-left', action: move('left')},
        {shortcut: 'arrow-right', action: move('right')},
        {shortcut: 'arrow-up', action: move('top')},
      ]}>
        <div className="App">
          <Sidebar></Sidebar>
          <main className="main">
            <Wall></Wall>
          </main>
        </div>
      </Keyboard>
    );
  }
}
