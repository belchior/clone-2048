import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import { Keyboard, } from '../keyboard/Keyboard';
import { PLAYER_LOSE, PLAYER_WON, PLAYING, WELCOME, } from '../../reducers/actions/types';
import { TouchEvent } from '../TouchEvent/TouchEvent';
import Sidebar from '../Sidebar';
import Wall from '../Wall';
import Welcome from '../Welcome';
import { Modal, } from '../Modal';
import './App.css';

export class App extends Component {
  renderModal(title, button) {
    const { bestScore, hardMode, score, welcomeWall, } = this.props;
    const modalProps = {
      bestScore,
      button,
      hardMode,
      score,
      title,
      wall: welcomeWall,
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

  renderModalLose() {
    const { restartAction, } = this.props;
    const button = {
      handleAction: restartAction,
      text: 'Try Again',
    };
    return this.renderModal('You Lose', button);
  }

  renderModalWon() {
    const { restartAction, } = this.props;
    const button = {
      handleAction: restartAction,
      text: 'Try Again',
    };
    return this.renderModal('You Won', button);
  }

  renderWall() {
    const { moveTo, } = this.props;
    const moveToDirection = moveTo(this.props);
    const shortcuts = [
      { action: moveToDirection('bottom'), shortcut: 'arrow-down', },
      { action: moveToDirection('left'), shortcut: 'arrow-left', },
      { action: moveToDirection('right'), shortcut: 'arrow-right', },
      { action: moveToDirection('top'), shortcut: 'arrow-up', },
    ];

    return (
      <TouchEvent>
        <Keyboard
          shortcuts={shortcuts}
          targetSelector="body"
        >
          <div className="App no-select">
            <Sidebar />
            <main className="main">
              <Wall />
            </main>
          </div>
        </Keyboard>
      </TouchEvent>
    );
  }

  /* eslint class-methods-use-this: off */
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

  render() {
    const { status, } = this.props;
    switch (status) {
      case WELCOME: return this.renderWelcome();
      case PLAYING: return this.renderWall();
      case PLAYER_LOSE: return this.renderModalLose();
      case PLAYER_WON: return this.renderModalWon();
      default: return this.renderWall();
    }
  }
}

App.propTypes = {
  bestScore: PropTypes.number.isRequired,
  hardMode: PropTypes.bool.isRequired,
  maxBlock: PropTypes.number.isRequired,
  moveTo: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  rollback: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
  welcomeWall: PropTypes.arrayOf(PropTypes.number).isRequired,
};
