import { parseShortcut } from './parseShortcut';

test('parseShortcut should be a function', () => {
  expect(typeof parseShortcut).toBe('function');
});

test('parseShortcut should throw an Error when type of param is different from string', () => {
  expect(() => parseShortcut(undefined)).toThrow()
  expect(() => parseShortcut(null)).toThrow()
  expect(() => parseShortcut(123)).toThrow()
  expect(() => parseShortcut({})).toThrow()
});

test('parseShortcut should match alt key', () => {
  const withAlt = parseShortcut('alt+c');
  const withoutAlt = parseShortcut('ctrl+c');

  expect(withAlt).toHaveProperty('altKey', true);
  expect(withoutAlt).toHaveProperty('altKey', false);
});

test('parseShortcut should match ctrl key', () => {
  const withCtrl = parseShortcut('ctrl+c');
  const withoutCtrl = parseShortcut('alt+c');

  expect(withCtrl).toHaveProperty('ctrlKey', true);
  expect(withoutCtrl).toHaveProperty('ctrlKey', false);
});

test('parseShortcut should match meta key', () => {
  const withMeta = parseShortcut('meta+c');
  const withoutMeta = parseShortcut('ctrl+c');

  expect(withMeta).toHaveProperty('metaKey', true);
  expect(withoutMeta).toHaveProperty('metaKey', false);
});

test('parseShortcut should match shift key', () => {
  const withShift = parseShortcut('shift+c');
  const withoutShift = parseShortcut('ctrl+c');

  expect(withShift).toHaveProperty('shiftKey', true);
  expect(withoutShift).toHaveProperty('shiftKey', false);
});

test('parseShortcut should return an object whose attribute keys is equivalent to passed key', () => {
  const shortcut = parseShortcut('shift+c');

  expect(shortcut.keys).toContain('c');
});

test('parseShortcut should return an object whose attribute keys an empty array when no key is found', () => {
  const shortcut = parseShortcut('shift+@');

  expect(shortcut.keys).toHaveLength(0);
});
