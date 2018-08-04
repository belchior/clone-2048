import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PlayerLose } from './index';

const initialProps = {
  bestScore: 0,
  button: { text: '', action: () => {}},
  hardMode: false,
  score: 0,
  wall: [],
};

const renderer = new ShallowRenderer();

it('PlayerLose should render without crashing', () => {
  const tree = renderer.render(<PlayerLose {...initialProps} />);
  expect(tree).toMatchSnapshot();
});

it('PlayerLoseAction button when clicked should call buttonAction callback', () => {
  const buttonAction = jest.fn();
  const props = {
    ...initialProps,
    button: { text: 'Action', action: buttonAction },
  };
  const tree = renderer.render(<PlayerLose {...props} />);
  const playerLoseAction = tree.props.children[1].props.children[2].props;

  playerLoseAction.onClick();
  expect(buttonAction.mock.calls).toHaveLength(1);
});
