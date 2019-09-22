import React from 'react';
import PropTypes from 'prop-types';

import './Block.css';

export function Block({ value, }) {
  return <div className={`Block block-${value}`}>{value}</div>;
}

Block.propTypes = {
  value: PropTypes.number.isRequired,
};
