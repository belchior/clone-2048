import { parseShortcut } from './parseShortcut';

const matchWith = keyboardEvent => userKey => (
  userKey.altKey === keyboardEvent.altKey &&
  userKey.ctrlKey === keyboardEvent.ctrlKey &&
  userKey.metaKey === keyboardEvent.metaKey &&
  userKey.shiftKey === keyboardEvent.shiftKey &&
  userKey.keys.indexOf(keyboardEvent.key) >= 0 &&
  userKey.keys.indexOf(keyboardEvent.location) >= 0
);

export const Keyboard = ({shortcuts, children}) => {
  const userShortcuts = shortcuts.reduce((list, item) => {
    const parsedShortcut = parseShortcut(item.shortcut);
    return parsedShortcut.keys.length > 0 ? list.concat({ ...item, ...parsedShortcut }) : list;
  }, []);

  document.body.addEventListener('keyup', (keyboardEvent) => {
    userShortcuts.filter(matchWith(keyboardEvent)).map(shortcut => shortcut.action());
  });

  return children;
};
