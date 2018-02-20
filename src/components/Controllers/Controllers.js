import React, { Component } from 'react';

import './Controllers.css';
import { ButtonToggle } from '../ButtonToggle';

export class Controllers extends Component {
  render() {
    return (
      <div className="Controllers">
        <h2 className="subtitle">Controls</h2>
        <button className="btn controls-btn_back" title="Step back" tabIndex="1">back (2)</button>
        <button className="btn controls-btn_restart" title="Restart the game" tabIndex="2">restart</button>
        <button className="btn controls-btn_save" title="Save my progress" tabIndex="3">save</button>
        <button className="btn controls-btn_load" title="Load my game saved" tabIndex="4">load</button>
        <ButtonToggle title="Hard mode" label="Hard mode"></ButtonToggle>
      </div>
    );
  }
}
