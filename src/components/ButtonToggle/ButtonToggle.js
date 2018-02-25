import React from 'react';
import PropTypes from 'prop-types';

import './ButtonToggle.css';

export const ButtonToggle = ({onClick, active = false, label = '', title = label}) => {
  return (
    <label htmlFor="toggleButton" className="btn-toggle-label">
      <button id="toggleButton" className="btn-toggle"
        onClick={onClick} data-active={active} title={title}
      ></button>
      {label}
    </label>
  );
};

ButtonToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
};
