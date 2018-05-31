import React from 'react';
import PropTypes from 'prop-types';

import './Wall.css';
import { Block } from '../Block';

export const Wall = ({ wall, hardMode, moveError }) => (
  <div className={
    'Wall ' + (hardMode ? 'hardMode ' : '') + (moveError ? 'moveError ' : '')
  }>
    {wall.map((value, index) => <Block value={value} key={index}></Block>)}
  </div>
);

Wall.propTypes = {
  hardMode: PropTypes.bool,
  moveError: PropTypes.bool,
  wall: PropTypes.array.isRequired,
};
