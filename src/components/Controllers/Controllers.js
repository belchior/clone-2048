import React from 'react';
import PropTypes from 'prop-types';

import { WELCOME } from '../../reducers/actions/types';
import { ButtonToggle } from '../ButtonToggle';
import './Controllers.css';

export function Controllers(props) {
  const {
    hardMode,
    hardModeAction,
    restartAction,
    rollback,
    rollbackAction,
    status,
  } = props;

  return (
    <div className="Controllers">
      <h2 className="subtitle">Controls</h2>
      <button
        className="btn controls-btn_back"
        disabled={status === WELCOME || rollback === 0}
        onClick={rollbackAction}
        title="Step back"
        type="button"
      >
        back ({rollback})
      </button>
      <button
        className="btn controls-btn_restart"
        disabled={status === WELCOME}
        onClick={restartAction}
        title="Restart the game"
        type="button"
      >
        restart
      </button>
      <ButtonToggle
        active={hardMode}
        label="Hard mode"
        onClick={hardModeAction}
        title="Hard mode"
      />
    </div>
  );
}

Controllers.propTypes = {
  hardMode: PropTypes.bool,
  hardModeAction: PropTypes.func.isRequired,
  restartAction: PropTypes.func.isRequired,
  rollback: PropTypes.number,
  rollbackAction: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

Controllers.defaultProps = {
  hardMode: false,
  rollback: 0,
};
