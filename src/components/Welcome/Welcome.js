import React from 'react';
import PropTypes from 'prop-types';

import './Welcome.css';
import { Wall } from '../Wall';

export const Welcome = ({ button, hardMode, wall }) => (
  <div className="Welcome">
    <Wall wall={wall} hardMode={hardMode}></Wall>
    <button type="button" className="WelcomeAction" onClick={button.action}>{button.text}</button>
  </div>
);

Welcome.displayName = 'Welcome';
Welcome.propTypes = {
  hardMode: PropTypes.bool,
  wall: PropTypes.array.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
};
