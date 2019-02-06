import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import clone2048 from '../../static/images/clone-2048.svg';
import { Score } from '../Score';
import { Wall } from '../Wall';

export const Modal = ({ bestScore, button, hardMode, score, title, wall }) => (
  <section className="Modal">
    <Wall hardMode={hardMode} wall={wall} />
    <div className="Modal-content">
      <img alt="Logo Clone 2048" className="logo" src={clone2048} />
      <h1 className="Modal-title">{title}</h1>
      <Score best={bestScore} current={score} />
      <button
        className="ModalAction"
        onClick={button.handleAction}
        type="button"
      >
        {button.text}
      </button>
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
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Modal.defaultProps = {
  hardMode: false,
};
