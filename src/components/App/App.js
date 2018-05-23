import React, { Component } from 'react';

import { moveToBottom, moveToLeft, moveToRight, moveToTop } from '../../actions/move';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import './App.css';


export class App extends Component {
  render() {

    return (
      <Keyboard shortcuts={[
        {shortcut: 'arrow-down', action: moveToBottom},
        {shortcut: 'arrow-left', action: moveToLeft},
        {shortcut: 'arrow-right', action: moveToRight},
        {shortcut: 'arrow-up', action: moveToTop},
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
