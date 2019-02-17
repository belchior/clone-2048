import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from './Modal';


const setup = (props = {}) => {
  const requiredProps = {
    bestScore: 0,
    button: { text: '', handleAction: () => {}},
    hardMode: false,
    score: 0,
    title: '',
    wall: [],
    ...props,
  };
  return shallow(<Modal {...requiredProps} />);
};

it('Modal should render without crashing ', () => {
  const renderComponent = () => setup();
  expect(renderComponent).not.toThrow();
});

it('Modal should render without crashing with all props', () => {
  const props = {
    bestScore: 2048,
    button: { text: 'Try Again', handleAction: () => {}},
    hardMode: true,
    score: 234,
    title: 'You Won',
    wall: [2048, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0],
  };
  const renderComponent = () => setup(props);
  expect(renderComponent).not.toThrow();
});

it('button ModalAction when clicked should call buttonAction callback', () => {
  const buttonAction = jest.fn();
  const props = {
    button: { text: 'Action', handleAction: buttonAction },
  };
  const wrapper = setup(props);
  const ModalAction = wrapper.find('.ModalAction');
  ModalAction.simulate('click');

  expect(buttonAction.mock.calls).toHaveLength(1);
});
