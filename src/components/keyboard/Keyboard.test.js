import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Keyboard } from './Keyboard';

const renderer = new ShallowRenderer();


test('Keyboard should be instantiable', () => {
  const keyboard = new Keyboard();

  expect(keyboard instanceof Keyboard).toBe(true);
});

test('Keyboard should be extended from React Component', () => {
  const keyboard = new Keyboard();

  expect(keyboard instanceof Component).toBe(true);
});

test('Keyboard should render without crashing', () => {
  const props = {
    shortcuts: [
      {shortcut: 'ctrl+d', action: () => {}}
    ]
  };
  const tree = renderer.render(
    <Keyboard {...props}><div className="test">test</div></Keyboard>
  );

  // console.error(tree);
  expect(tree).toMatchSnapshot();
});
