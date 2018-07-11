import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import Welcome from '../Welcome';
import { moveTo } from './move';

export class App extends Component {
  render() {
    const state = this.props.state;
    return state.welcome ? this.renderWelcome() : this.renderWall();
  }

  renderWelcome() {
    return (
      <div className="App no-select">
        <Sidebar />
        <main className="main">
          <Welcome />
        </main>
      </div>
    );
  }

  renderWall() {
    const {
      dispatch,
      state,
    } = this.props;
    const moveToDirection = moveTo(dispatch)(state);

    return (
      <Keyboard shortcuts={[
        {shortcut: 'arrow-down', action: moveToDirection('bottom')},
        {shortcut: 'arrow-left', action: moveToDirection('left')},
        {shortcut: 'arrow-right', action: moveToDirection('right')},
        {shortcut: 'arrow-up', action: moveToDirection('top')},
      ]}>
        <div className="App no-select">
          <Sidebar />
          <main className="main">
            <Wall />
          </main>
        </div>
      </Keyboard>
    );
  }

}

App.propTypes = {
  dispatch: PropTypes.any.isRequired,
  state: PropTypes.shape({
    welcome: PropTypes.bool.isRequired,
    maxBlock: PropTypes.number,
    rollback: PropTypes.number,
    status: PropTypes.string,
    wall: PropTypes.array,
  }).isRequired,
};
