
import React from 'react';
import PropTypes from 'prop-types';


const touchstart = (event) => {
  console.log('touchstart client', event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  // console.log('touchstart screen', event.changedTouches[0].screenX, event.changedTouches[0].screenY);
};
const touchend = (event) => {
  console.log('touchend client', event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  // console.log('touchstart screen', event.changedTouches[0].screenX, event.changedTouches[0].screenY);
};

export function TouchEvent(props) {
  document.body.removeEventListener('touchstart', touchstart);
  document.body.removeEventListener('touchend', touchend);

  document.body.addEventListener('touchstart', touchstart);
  document.body.addEventListener('touchend', touchend);
  return props.children;
}

Touch.propTypes = {

};
