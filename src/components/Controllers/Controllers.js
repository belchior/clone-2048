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
    welcome,
  } = props;

  return (
    <div className="Controllers">
      <h2 className="subtitle">Controls</h2>
      <button
        title="Step back"
        onClick={rollbackAction}
        disabled={welcome === true || rollback === 0}
        className="btn controls-btn_back"
      >back ({rollback})</button>
      <button
        title="Restart the game"
        onClick={restartAction}
        disabled={welcome === true}
        className="btn controls-btn_restart"
      >restart</button>
      <ButtonToggle
        title="Hard mode"
        label="Hard mode"
        onClick={hardModeAction}
        active={hardMode}
      ></ButtonToggle>
    </div>
  );
};

Controllers.propTypes = {
  hardMode: PropTypes.bool,
  hardModeAction: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  rollback: PropTypes.number,
  rollbackAction: PropTypes.func.isRequired,
  welcome: PropTypes.bool.isRequired,
};
