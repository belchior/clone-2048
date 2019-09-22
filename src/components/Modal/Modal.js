import React from 'react';
import PropTypes from 'prop-types';

import clone2048 from '../../static/images/clone-2048.svg';
import { Score, } from '../Score';
import { Wall, } from '../Wall';
import './Modal.css';

export function Modal(props) {
  const { bestScore, button, hardMode, score, title, wall, } = props;
  return (
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
}

Modal.propTypes = {
  bestScore: PropTypes.number.isRequired,
  button: PropTypes.shape({
    handleAction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hardMode: PropTypes.bool,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  wall: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Modal.defaultProps = {
  hardMode: false,
};
