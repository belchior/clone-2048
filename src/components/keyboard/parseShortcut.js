import { keyMap } from './keyMap';

export function parseShortcut(shortcut) {
  if (typeof shortcut !== 'string') {
    throw new Error('KeyboardEvent: The shortcut must be string');
  }
  const normalizedShortcut = shortcut.toLowerCase().trim();
  return {
    altKey: hasAlt(normalizedShortcut),
    ctrlKey: hasControl(normalizedShortcut),
    metaKey: hasMeta(normalizedShortcut),
    shiftKey: hasShift(normalizedShortcut),
    keys: keys(normalizedShortcut),
  };
}

function hasAlt(shortcut) {
  return shortcut.search(/alt(?!-(left|right))/i) !== -1;
}

function hasControl(shortcut) {
  return shortcut.search(/ctrl(?!-(left|right))/i) !== -1;
}

function hasMeta(shortcut) {
  return shortcut.search(/meta(?!-(left|right))/i) !== -1;
}

function hasShift(shortcut) {
  return shortcut.search(/shift(?!-(left|right))/i) !== -1;
}

function keys(shortcut) {
  const name = shortcut.split('+').pop();
  return keyMap[name] ? keyMap[name] : [];
}
