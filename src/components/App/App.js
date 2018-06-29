import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import { moveTo } from './move';

export class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const state = this.props.state;
    const moveToDirection = moveTo(dispatch)(state);
    return (
      <Keyboard shortcuts={[
        {shortcut: 'arrow-down', action: moveToDirection('bottom')},
        {shortcut: 'arrow-left', action: moveToDirection('left')},
        {shortcut: 'arrow-right', action: moveToDirection('right')},
        {shortcut: 'arrow-up', action: moveToDirection('top')},
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

App.propTypes = {
  dispatch: PropTypes.any.isRequired,
  state: PropTypes.shape({
    maxBlock: PropTypes.number,
    rollback: PropTypes.number,
    status: PropTypes.string,
    wall: PropTypes.array,
  }).isRequired,
};
