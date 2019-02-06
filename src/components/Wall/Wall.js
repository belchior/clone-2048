import React from 'react';
import PropTypes from 'prop-types';

import './Wall.css';
import { Block } from '../Block';

export const Wall = ({ hardMode, moveError, wall }) => (
  <div className={
    'Wall ' + (hardMode ? 'hardMode ' : '') + (moveError ? 'moveError ' : '')
  }
  >
    {wall.map(value => <Block key={value} value={value} />)}
  </div>
);

Wall.displayName = 'Wall';
Wall.propTypes = {
  hardMode: PropTypes.bool,
  moveError: PropTypes.bool,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Wall.defaultProps = {
  hardMode: false,
  moveError: false,
};
