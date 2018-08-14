import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Modal } from './index';

const initialProps = {
  bestScore: 0,
  button: { text: '', action: () => {}},
  hardMode: false,
  score: 0,
  title: '',
  wall: [],
};

const renderer = new ShallowRenderer();

it('Modal should render without crashing ', () => {
  const tree = renderer.render(<Modal {...initialProps} />);
  expect(tree).toMatchSnapshot();
});

it('Modal should render without crashing with all props', () => {
  const props = {
    bestScore: 2048,
    button: { text: 'Try Again', action: () => {}},
    hardMode: true,
    score: 234,
    title: 'You Won',
    wall: [2048, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0],
  };
  const tree = renderer.render(<Modal {...props} />);
  expect(tree).toMatchSnapshot();
});

it('button ModalAction when clicked should call buttonAction callback', () => {
  const buttonAction = jest.fn();
  const props = {
    ...initialProps,
    button: { text: 'Action', action: buttonAction },
  };
  const tree = renderer.render(<Modal {...props} />);
  const ModalAction = tree.props.children[1].props.children[3].props;

  ModalAction.onClick();
  expect(buttonAction.mock.calls).toHaveLength(1);
});
