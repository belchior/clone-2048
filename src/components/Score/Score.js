import React from 'react';

import './Score.css';

export const Score = (props) => (
  <div className="Score">
    <span className="current_score" title="The current score">{props.current}</span>
    <span className="best_score" title="The best score">{props.best}</span>
  </div>
);
