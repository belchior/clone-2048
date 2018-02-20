import React, { Component } from 'react';

import './ButtonToggle.css';

export class ButtonToggle extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    }
  }

  render() {
    return (
      <label htmlFor="toggleButton" className="btn-toggle-label">
        <button onClick={this.toggle} id="toggleButton" className="btn-toggle" data-active={this.state.active} title={this.props.title}></button>{this.props.label}
      </label>
    );
  }

  toggle = () => {
    this.setState((prevState, props) => ({
      active: !prevState.active
    }));
  }
}
