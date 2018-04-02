import React from 'react';
import PropTypes from 'prop-types';

import './Controllers.css';
import { ButtonToggle } from '../ButtonToggle';

export const Controllers = (props) => {
  const {
    rollBackAction,
    saveAction,
    loadAction,
    restartAction,
    hardModeAction,
    rollBack,
    hardMode,
  } = props;

  return (
    <div className="Controllers">
      <h2 className="subtitle">Controls</h2>
      <button onClick={rollBackAction} disabled={rollBack === 0} className="btn controls-btn_back" title="Step back">
        back ({rollBack})
      </button>
      <button onClick={saveAction} className="btn controls-btn_save" title="Save my progress">
        save
      </button>
      <button onClick={loadAction} className="btn controls-btn_load" title="Load my game saved">
        load
      </button>
      <button onClick={restartAction} className="btn controls-btn_restart" title="Restart the game">
        restart
      </button>
      <ButtonToggle onClick={hardModeAction} active={hardMode} title="Hard mode" label="Hard mode"></ButtonToggle>
    </div>
  );
};

Controllers.propTypes = {
  rollBackAction: PropTypes.func.isRequired,
  saveAction: PropTypes.func.isRequired,
  loadAction: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  hardModeAction: PropTypes.func.isRequired,
  hardMode: PropTypes.bool,
  rollBack: PropTypes.number,
};
