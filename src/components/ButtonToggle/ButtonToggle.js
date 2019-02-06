import React from 'react';
import PropTypes from 'prop-types';

import './ButtonToggle.css';

export const ButtonToggle = ({onClick, active = false, label = '', title = label}) => {
  return (
    <label className="btn-toggle-label" htmlFor="toggleButton">
      <button
        className="btn-toggle"
        data-active={active}
        id="toggleButton"
        onClick={onClick}
        title={title}
        type="button"
      />
      {label}
    </label>
  );
};

ButtonToggle.displayName = 'ButtonToggle';
ButtonToggle.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ButtonToggle.defaultProps = {
  active: false,
  label: '',
  title: '',
};
