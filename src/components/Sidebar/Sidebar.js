import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Sidebar.css';
import { Score } from '../Score';
import Controllers from '../Controllers';
import hamburgerMenu from '../../static/images/icon-hamburger-menu.svg';
import logo from '../../static/images/clone-2048.svg';
import iconGithub from '../../static/images/icon-github.svg';

export class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      menuFullVisibility: false
    };

    this.toggleMenuFullVisibility = this.toggleMenuFullVisibility.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  render() {
    return (
      <aside className="Sidebar">
        <div className="menu_compact">
          <button className="btn-menu" onClick={this.toggleMenuFullVisibility}><img src={hamburgerMenu} alt="ícone do menu principal" /></button>
          <Score current={this.props.score} best={this.props.bestScore}></Score>
        </div>

        <div className={'menu_full ' + (this.state.menuFullVisibility ? 'visible' : '')} onClick={this.toggleMenuFullVisibility}>
          <div className="menu_full-container" onClick={this.stopPropagation}>
            <h1 className="title">
              <img className="logo" src={logo} alt="Logo clone 2048"/>
              <span>Clone 2048</span>
            </h1>
            <Score current={this.props.score} best={this.props.bestScore}></Score>
            <Controllers></Controllers>
            <nav className="list external-links">
              <a className="list-item link-github" href="https://github.com/belchior/clone-2048">
                <img className="list-item-image" src={iconGithub} alt="Logotipo do GitHub" />
                <span className="list-item-text">Calc no GitHub</span>
              </a>
              <a className="list-item" href="https://github.com/belchior">
                <img className="list-item-image" src="https://avatars0.githubusercontent.com/u/2656585?v=3" alt="Fotografia de Belchior Oliveira" />
                <span className="list-item-text">Belchior Oliveira</span>
              </a>
            </nav>
          </div>
        </div>

      </aside>
    );
  }

  toggleMenuFullVisibility() {
    this.setState((prevState) => ({
      menuFullVisibility: !prevState.menuFullVisibility
    }));
  }

  stopPropagation(event) {
    event.stopPropagation();
  }
}

Sidebar.displayName = 'Sidebar';
Sidebar.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};
