
import PropTypes from 'prop-types';


let start = null;
let end = null;
const tolerance = 30;

const getCordinates = touchEvent => ({
  x: touchEvent.clientX,
  y: touchEvent.clientY,
});

const getMainDiretion = (posStart, posEnd) => {
  const absX = Math.abs(posStart.x - posEnd.x);
  const absY = Math.abs(posStart.y - posEnd.y);
  if (Math.max(absX, absY) <= tolerance) return;
  if (absX > absY) {
    if (posStart.x < posEnd.x) return 'right';
    return 'left';
  }
  if (posStart.y < posEnd.y) return 'bottom';
  return 'top';
};


export function TouchEvent(props) {
  const touchstart = (event) => {
    start = getCordinates(event.changedTouches[0]);
  };
  const touchend = (event) => {
    end = getCordinates(event.changedTouches[0]);
    props.moveTo(getMainDiretion(start, end))();
  };
  document.body.ontouchstart = touchstart;
  document.body.ontouchend = touchend;
  return props.children;
}
TouchEvent.propTypes = {
  moveTo: PropTypes.func.isRequired,
};
