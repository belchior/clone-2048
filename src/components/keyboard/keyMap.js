/* eslint sort-keys: off */

/*
 * Official Documentation
 * https://www.w3.org/TR/uievents-key/
 * https://www.w3.org/TR/uievents-code/
 */

export const keyMap = {

  /*
   * Modifier Keys
   */
  alt: [ 'Alt', 1, 2, ],
  'alt-left': [ 'Alt', 1, ],
  'alt-right': [ 'Alt', 2, ],
  'caps-lock': [ 'CapsLock', 0, ],
  ctrl: [ 'Control', 1, 2, ],
  'ctrl-left': [ 'Control', 1, ],
  'ctrl-right': [ 'Control', 2, ],
  meta: [ 'Meta', 1, 2, ],
  'meta-left': [ 'Meta', 1, ],
  'meta-right': [ 'Meta', 2, ],
  numlock: [ 'NumLock', 0, ],
  shift: [ 'Shift', 1, 2, ],
  'shift-left': [ 'Shift', 1, ],
  'shift-right': [ 'Shift', 2, ],

  /*
   * Whitespace Keys
   */
  enter: [ 'Enter', 0, ],
  tab: [ 'Tab', 0, ],

  /*
   * Navigation Keys
   */
  'arrow-down': [ 'ArrowDown', 'Down', 0, ],
  'arrow-left': [ 'ArrowLeft', 'Left', 0, ],
  'arrow-right': [ 'ArrowRight', 'Right', 0, ],
  'arrow-up': [ 'ArrowUp', 'Up', 0, ],
  end: [ 'End', 0, ],
  home: [ 'Home', 0, ],
  insert: [ 'Insert', 0, ],
  'page-down': [ 'PageDown', 0, ],
  'page-up': [ 'PageUp', 0, ],
  'pause ': [ 'Pause', 0, ],
  'print-screen': [ 'PrintScreen', 0, ],
  'scroll-lock ': [ 'ScrollLock', 0, ],

  /*
   * Editing Keys
   */
  backspace: [ 'Backspace', 0, ],
  clear: [ 'Clear', 0, ],
  copy: [ 'Copy', 0, ],
  cut: [ 'Cut', 0, ],
  delete: [ 'Delete', 0, ],
  paste: [ 'Paste', 0, ],
  redo: [ 'Redo', 0, ],
  undo: [ 'Undo', 0, ],

  /*
   * Letters
   */
  a: [ 'a', 'A', 0, ],
  b: [ 'b', 'B', 0, ],
  c: [ 'c', 'C', 0, ],
  d: [ 'd', 'D', 0, ],
  e: [ 'e', 'E', 0, ],
  f: [ 'f', 'F', 0, ],
  g: [ 'g', 'G', 0, ],
  h: [ 'h', 'H', 0, ],
  i: [ 'i', 'I', 0, ],
  j: [ 'j', 'J', 0, ],
  k: [ 'k', 'K', 0, ],
  l: [ 'l', 'L', 0, ],
  m: [ 'm', 'M', 0, ],
  n: [ 'n', 'N', 0, ],
  o: [ 'o', 'O', 0, ],
  p: [ 'p', 'P', 0, ],
  q: [ 'q', 'Q', 0, ],
  r: [ 'r', 'R', 0, ],
  s: [ 's', 'S', 0, ],
  t: [ 't', 'T', 0, ],
  u: [ 'u', 'U', 0, ],
  v: [ 'v', 'V', 0, ],
  w: [ 'w', 'W', 0, ],
  x: [ 'x', 'X', 0, ],
  y: [ 'y', 'Y', 0, ],
  z: [ 'z', 'Z', 0, ],

  /*
   * Numbers
   */
  0: [ '0', 'Numpad0', 0, ],
  1: [ '1', 'Numpad1', 0, ],
  2: [ '2', 'Numpad2', 0, ],
  3: [ '3', 'Numpad3', 0, ],
  4: [ '4', 'Numpad4', 0, ],
  5: [ '5', 'Numpad5', 0, ],
  6: [ '6', 'Numpad6', 0, ],
  7: [ '7', 'Numpad7', 0, ],
  8: [ '8', 'Numpad8', 0, ],
  9: [ '9', 'Numpad9', 0, ],

  /*
   * Text formater
   */
  backquote: [ '\'', 0, ],
  'bracket-left': [ 'BracketLeft', 0, ],
  'bracket-right': [ 'BracketRight', 0, ],
  comma: [ ',', 0, ],
  equal: [ '=', 0, ],
  backslash: [ '\\', 0, ],
  minus: [ '-', 0, ],
  period: [ '.', 0, ],
  semicolon: [ ';', 0, ],
  slash: [ '/', 0, ],
  space: [ ' ', 0, ],

  /*
   * NumPad
   */
  'num-lock': [ 'NumLock', 0, ],
  'numpad-0': [ 'Numpad0', 0, ],
  'numpad-1': [ 'Numpad1', 0, ],
  'numpad-2': [ 'Numpad2', 0, ],
  'numpad-3': [ 'Numpad3', 0, ],
  'numpad-4': [ 'Numpad4', 0, ],
  'numpad-5': [ 'Numpad5', 0, ],
  'numpad-6': [ 'Numpad6', 0, ],
  'numpad-7': [ 'Numpad7', 0, ],
  'numpad-8': [ 'Numpad8', 0, ],
  'numpad-9': [ 'Numpad9', 0, ],
  'numpad-backspace': [ 'NumpadBackspace', 0, ],
  'numpad-comma': [ 'NumpadComma', 0, ],
  'numpad-decimal': [ 'NumpadDecimal', 0, ],
  'numpad-divide': [ 'NumpadDivide', 0, ],
  'numpad-enter': [ 'NumpadEnter', 0, ],
  'numpad-equal': [ 'NumpadEqual', 0, ],
  'numpad-multiply': [ 'NumpadMultiply', 0, ],
  'numpad-subtract': [ 'NumpadSubtract', 0, ],

  escape: [ 'Escape', 0, ],
};
