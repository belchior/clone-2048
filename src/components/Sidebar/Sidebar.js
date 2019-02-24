import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';
import { Score, } from '../Score';
import Controllers from '../Controllers';
import hamburgerMenu from '../../static/images/icon-hamburger-menu.svg';
import logo from '../../static/images/clone-2048.svg';
import iconGithub from '../../static/images/icon-github.svg';

export class Sidebar extends Component {
  state = {
    menuFullVisibility: false,
  };

  handleVisibility = () => {
    /* eslint no-invalid-this: off */
    this.setState(prevState => ({
      menuFullVisibility: !prevState.menuFullVisibility,
    }));
  }

  handleStopPropagation = (event) => {
    event.stopPropagation();
  }

  render() {
    const { bestScore, score, } = this.props;
    const { menuFullVisibility, } = this.state;

    const className = `menu_full ${menuFullVisibility ? 'visible' : ''}`;

    return (
      <aside className="Sidebar">
        <div className="menu_compact">
          <button
            className="btn-menu"
            onClick={this.handleVisibility}
            type="button"
          >
            <img alt="ícone do menu principal" src={hamburgerMenu} />
          </button>
          <Score best={bestScore} current={score} />
        </div>

        <div className={className} onClick={this.handleVisibility}>
          <div className="menu_full-container" onClick={this.handleStopPropagation}>
            <h1 className="title">
              <img alt="Logo clone 2048" className="logo" src={logo} />
              <span>Clone 2048</span>
            </h1>
            <Score best={bestScore} current={score} />
            <Controllers />
            <nav className="list external-links">
              <a className="list-item link-github" href="https://github.com/belchior/clone-2048">
                <img alt="Logotipo do GitHub" className="list-item-image" src={iconGithub} />
                <span className="list-item-text">Calc no GitHub</span>
              </a>
              <a className="list-item" href="https://github.com/belchior">
                <img
                  alt="Fotografia de Belchior Oliveira"
                  className="list-item-image"
                  src="https://avatars0.githubusercontent.com/u/2656585?v=3"
                />
                <span className="list-item-text">Belchior Oliveira</span>
              </a>
            </nav>
          </div>
        </div>

      </aside>
    );
  }
}

Sidebar.propTypes = {
  bestScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
