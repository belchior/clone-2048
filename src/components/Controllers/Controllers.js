import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Controllers.css';
import { ButtonToggle } from '../ButtonToggle';

export class Controllers extends Component {
  render() {
    const {
      rollBackAction,
      saveAction,
      loadAction,
      restartAction,
      hardModeAction,
      rollBack,
      hardMode,
    } = this.props;

    return (
      <div className="Controllers">
        <h2 className="subtitle">Controls</h2>
        <button className="btn controls-btn_back" title="Step back"
          onClick={rollBackAction} disabled={rollBack === 0}
        >
          back ({rollBack})
        </button>
        <button className="btn controls-btn_save" title="Save my progress"
          onClick={saveAction}
        >
          save
        </button>
        <button className="btn controls-btn_load" title="Load my game saved"
          onClick={loadAction}
        >
          load
        </button>
        <button className="btn controls-btn_restart" title="Restart the game"
          onClick={restartAction}
        >
          restart
        </button>
        <ButtonToggle title="Hard mode" label="Hard mode"
          onClick={hardModeAction} active={hardMode}
        ></ButtonToggle>
      </div>
    );
  }
}

Controllers.propTypes = {
  rollBackAction: PropTypes.func.isRequired,
  saveAction: PropTypes.func.isRequired,
  loadAction: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  hardModeAction: PropTypes.func.isRequired,
  hardMode: PropTypes.bool,
  rollBack: PropTypes.number,
};
