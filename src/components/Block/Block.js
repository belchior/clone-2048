import React from 'react';
import PropTypes from 'prop-types';

import './Block.css';

export const Block = ({ value }) => (
  <div className={'Block block-' + value}>{value}</div>
);

Block.propTypes = {
  value: PropTypes.number.isRequired,
};
