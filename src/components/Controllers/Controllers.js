import React from 'react';
import PropTypes from 'prop-types';

import './Controllers.css';
import { ButtonToggle } from '../ButtonToggle';

export const Controllers = props => {
  const {
    rollbackAction,
    restartAction,
    hardModeAction,
    rollback,
    hardMode,
  } = props;

  return (
    <div className="Controllers">
      <h2 className="subtitle">Controls</h2>
      <button onClick={rollbackAction} disabled={rollback === 0} className="btn controls-btn_back" title="Step back">
        back ({rollback})
      </button>
      <button onClick={restartAction} className="btn controls-btn_restart" title="Restart the game">
        restart
      </button>
      <ButtonToggle onClick={hardModeAction} active={hardMode} title="Hard mode" label="Hard mode"></ButtonToggle>
    </div>
  );
};

Controllers.propTypes = {
  rollbackAction: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  hardModeAction: PropTypes.func.isRequired,
  hardMode: PropTypes.bool,
  rollback: PropTypes.number,
};
