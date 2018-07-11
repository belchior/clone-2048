import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

import { parseShortcut } from './parseShortcut';


let userShortcuts;

const matchWith = keyboardEvent => userKey => (
  userKey.altKey === keyboardEvent.altKey &&
  userKey.ctrlKey === keyboardEvent.ctrlKey &&
  userKey.metaKey === keyboardEvent.metaKey &&
  userKey.shiftKey === keyboardEvent.shiftKey &&
  userKey.keys.indexOf(keyboardEvent.key) >= 0 &&
  userKey.keys.indexOf(keyboardEvent.location) >= 0
);

const keyupHandler = keyboardEvent => {
  userShortcuts
    .filter(matchWith(keyboardEvent))
    .map(shortcut => shortcut.action());
};

export const Keyboard = ({shortcuts, children}) => {
  userShortcuts = shortcuts.reduce((list, item) => {
    const parsedShortcut = parseShortcut(item.shortcut);
    return parsedShortcut.keys.length > 0 ? list.concat({ ...item, ...parsedShortcut }) : list;
  }, []);

  document.body.removeEventListener('keyup', keyupHandler);
  document.body.addEventListener('keyup', keyupHandler);

  return children;
};

Keyboard.displayName = 'Keyboard';
Keyboard.propTypes = {
  shortcuts: PropTypes.array.isRequired,
  children: PropTypes.any,
};
