import React from 'react';
import PropTypes from 'prop-types';

import { Wall, } from '../Wall';
import './Welcome.css';

export function Welcome(props) {
  const { button, hardMode, wall, } = props;
  return (
    <div className="Welcome">
      <Wall hardMode={hardMode} wall={wall} />
      <button
        className="WelcomeAction"
        onClick={button.handleAction}
        type="button"
      >
        {button.text}
      </button>
    </div>
  );
}

Welcome.propTypes = {
  button: PropTypes.shape({
    handleAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hardMode: PropTypes.bool,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Welcome.defaultProps = {
  hardMode: false,
};
