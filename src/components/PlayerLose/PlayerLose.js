import React from 'react';
import PropTypes from 'prop-types';

import './PlayerLose.css';
import { Score } from '../Score';
import { Wall } from '../Wall';

export const PlayerLose = ({ bestScore, button, hardMode, score, wall }) => (
  <section className="PlayerLose">
    <Wall wall={wall} hardMode={hardMode}></Wall>
    <div className="PlayerLose-content">
      <h1 className="PlayerLose-title">You Lose</h1>
      <Score current={score} best={bestScore}></Score>
      <button type="button" className="PlayerLoseAction" onClick={button.action}>{button.text}</button>
    </div>
  </section>
);

PlayerLose.displayName = 'PlayerLose';
PlayerLose.propTypes = {
  bestScore: PropTypes.number.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
  hardMode: PropTypes.bool,
  score: PropTypes.number.isRequired,
  wall: PropTypes.array.isRequired,
};
