import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { parseShortcut } from './parseShortcut';


let userShortcuts;
const setUserShortcuts = shortcuts => {
  userShortcuts = shortcuts.reduce((list, item) => {
    const parsedShortcut = parseShortcut(item.shortcut);
    return parsedShortcut.keys.length > 0 ? list.concat({ ...item, ...parsedShortcut }) : list;
  }, []);
};

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

export class Keyboard extends Component {
  componentDidMount() {
    const { targetSelector } = this.props;
    if (targetSelector) this.setDOMEvent(keyupHandler, targetSelector);
  }

  componentDidUpdate() {
    const { targetSelector } = this.props;
    if (targetSelector) this.setDOMEvent(keyupHandler, targetSelector);
  }

  setDOMEvent(handler, selector) {
    const target = document.querySelector(selector);

    // the only way to add keyboard events to a target diferent from html or body
    // is adding a tabIndex attribute to it.
    if (
      ['HTML', 'BODY'].indexOf(target.nodeName) >= 0 &&
      !target.getAttribute('tabIndex')
    ) target.setAttribute('tabIndex', -1);


    // There is no way to check if a event was attached before
    target.removeEventListener('keyup', handler);
    target.addEventListener('keyup', handler);
  }

  setSyntheticEvent(children, handler) {
    if (!children) return;
    const childList = Array.isArray(children) ? children : [children];

    return React.Children.map(childList, child => {
      const props = { ...child.props, onKeyUp: handler, tabIndex: -1};
      return React.cloneElement(child, props, props.children);
    });
  }


  render() {
    const { shortcuts, targetSelector, children } = this.props;
    setUserShortcuts(shortcuts);
    if (!targetSelector) return this.setSyntheticEvent(children, keyupHandler);
    return children;
  }
}

Keyboard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]),
  shortcuts: PropTypes.arrayOf(
    PropTypes.shape({
      shortcut: PropTypes.string,
      action: PropTypes.func
    })
  ).isRequired,
  targetSelector: PropTypes.string,
};

Keyboard.defaultProps = {
  children: null,
  targetSelector: '',
};
