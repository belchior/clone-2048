import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Keyboard } from './Keyboard';


const setup = (props = {}, children) => {
  const requiredProps = {
    shortcuts: {
      shortcut: '',
      action: () => {}
    },
    ...props,
  };
  return shallow(<Keyboard {...requiredProps}>{children}</Keyboard>);
};

it('Keyboard should be instantiable', () => {
  const keyboard = new Keyboard();
  expect(keyboard instanceof Keyboard).toBe(true);
});

it('Keyboard should be extended from React Component', () => {
  const keyboard = new Keyboard();
  expect(keyboard instanceof Component).toBe(true);
});

it('Keyboard should render without crashing', () => {
  const props = {
    shortcuts: [
      { shortcut: 'ctrl+d', action: () => {} },
    ],
  };
  const children = <div className="test">test</div>;
  const wrapper = setup(props, children);
  expect(toJson(wrapper)).toMatchSnapshot();
});
