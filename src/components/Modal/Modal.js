import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import clone2048 from '../../static/images/clone-2048.svg';
import { Score } from '../Score';
import { Wall } from '../Wall';

export const Modal = ({ bestScore, button, hardMode, score, title, wall }) => (
  <section className="Modal">
    <Wall wall={wall} hardMode={hardMode}></Wall>
    <div className="Modal-content">
      <img className="logo" src={clone2048} alt="Logo Clone 2048" />
      <h1 className="Modal-title">{title}</h1>
      <Score current={score} best={bestScore}></Score>
      <button type="button" className="ModalAction" onClick={button.action}>{button.text}</button>
    </div>
  </section>
);

Modal.displayName = 'Modal';
Modal.propTypes = {
  bestScore: PropTypes.number.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired,
  hardMode: PropTypes.bool,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  wall: PropTypes.array.isRequired,
};
