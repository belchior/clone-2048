import React from 'react';
import PropTypes from 'prop-types';

import './Block.css';

export const Block = (props) => (
  <div className={'Block block-' + props.value}>{props.value}</div>
);

Block.propTypes = {
  value: PropTypes.number.isRequired,
};
