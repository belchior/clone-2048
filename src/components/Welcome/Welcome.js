import React from 'react';
import PropTypes from 'prop-types';

import './Welcome.css';
import { Wall } from '../Wall';

export const Welcome = ({ button, hardMode, wall }) => (
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

Welcome.displayName = 'Welcome';
Welcome.propTypes = {
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    handleAction: PropTypes.func.isRequired,
  }).isRequired,
  hardMode: PropTypes.bool,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Welcome.defaultProps = {
  hardMode: false,
};
