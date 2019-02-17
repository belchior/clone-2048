import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../Block';
import './Wall.css';

export function Wall(props) {
  const { hardMode, moveError, wall } = props;
  return (
    <div className={
      'Wall ' + (hardMode ? 'hardMode ' : '') + (moveError ? 'moveError ' : '')
    }
    >
      {wall.map(value => <Block key={value} value={value} />)}
    </div>
  );
}

Wall.propTypes = {
  hardMode: PropTypes.bool,
  moveError: PropTypes.bool,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Wall.defaultProps = {
  hardMode: false,
  moveError: false,
};
