import React from 'react';
import PropTypes from 'prop-types';

import './Score.css';

export function Score(props) {
  const { current = 0, best = 0, } = props;
  return (
    <div className="Score">
      <span className="current_score" title="The current score">{current}</span>
      <span className="best_score" title="The best score">{best}</span>
    </div>
  );
}

Score.propTypes = {
  best: PropTypes.number,
  current: PropTypes.number,
};

Score.defaultProps = {
  best: 0,
  current: 0,
};
