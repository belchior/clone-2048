import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import Welcome from '../Welcome';
import PlayerLose from '../PlayerLose';
import { moveTo } from './move';
import { PLAYER_LOSE, PLAYING, WELCOME } from '../../reducers/actions/types';

export class App extends Component {
  render() {
    const state = this.props.state;
    switch (state.status) {
      case WELCOME: return this.renderWelcome();
      case PLAYING: return this.renderWall();
      case PLAYER_LOSE: return this.renderPlayerLose();
      default: return this.renderWall();
    }
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

  renderPlayerLose() {
    return (
      <div className="App no-select">
        <Sidebar />
        <main className="main">
          <PlayerLose />
        </main>
      </div>
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
