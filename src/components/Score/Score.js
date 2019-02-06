import React from 'react';
import PropTypes from 'prop-types';

import './Score.css';

export const Score = ({current = 0, best = 0}) => (
  <div className="Score">
    <span className="current_score" title="The current score">{current}</span>
    <span className="best_score" title="The best score">{best}</span>
  </div>
);

Score.displayName = 'Score';
Score.propTypes = {
  best: PropTypes.number,
  current: PropTypes.number,
};

Score.defaultProps = {
  best: 0,
  current: 0,
};
