import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import { Keyboard } from '../keyboard/Keyboard';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import Welcome from '../Welcome';
import { Modal } from '../Modal';
import { moveTo } from './move';
import { restart as restartAction } from '../../reducers/actions/actions';
import { PLAYER_LOSE, PLAYER_WON, PLAYING, WELCOME } from '../../reducers/actions/types';

export class App extends Component {
  render() {
    const state = this.props.state;
    switch (state.status) {
      case WELCOME: return this.renderWelcome();
      case PLAYING: return this.renderWall();
      case PLAYER_LOSE: return this.renderModalLose();
      case PLAYER_WON: return this.renderModalWon();
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

  renderModalLose() {
    const button = {
      text: 'Try Again',
      action: () => this.dispatch(restartAction())
    };
    return this.renderModal('You Lose', button);
  }

  renderModalWon() {
    const button = {
      text: 'Try Again',
      action: () => this.dispatch(restartAction())
    };
    return this.renderModal('You Won', button);
  }

  renderModal(title, button) {
    const modalProps = {
      bestScore: this.props.state.bestScore,
      button: button,
      hardMode: this.props.state.hardMode,
      score: this.props.state.score,
      title: title,
      wall: this.props.state.welcomeWall,
    };

    return (
      <div className="App no-select">
        <Sidebar />
        <main className="main">
          <Modal {...modalProps} />
        </main>
      </div>
    );
  }

}

App.propTypes = {
  dispatch: PropTypes.any.isRequired,
  state: PropTypes.shape({
    bestScore: PropTypes.number,
    hardMode: PropTypes.bool,
    maxBlock: PropTypes.number,
    rollback: PropTypes.number,
    score: PropTypes.number,
    status: PropTypes.string,
    wall: PropTypes.array,
    welcomeWall: PropTypes.array,
  }).isRequired,
};
