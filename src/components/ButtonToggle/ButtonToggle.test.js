import React from 'react';
import { ButtonToggle } from './ButtonToggle';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();
const onClick = jest.fn();

it('ButtonToggle should render without crashing', () => {
  const props = {
    onClick: onClick,
    active: true,
    label: 'toggle button',
    title: 'my toggle button',
  };
  let tree = renderer.render(<ButtonToggle {...props} />);
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should call the callback when click', () => {
  let tree = renderer.render(<ButtonToggle onClick={onClick} />);
  tree.props.children[0].props.onClick();
  expect(onClick.mock.calls).toHaveLength(1);
});

it('ButtonToggle should assume data-active as false if active prop not passed', () => {
  let tree = renderer.render(<ButtonToggle onClick={onClick} />);
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume data-active as false if active prop is false', () => {
  let tree = renderer.render(<ButtonToggle active={false} onClick={onClick} />);
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume data-active as true if active prop is true', () => {
  let tree = renderer.render(<ButtonToggle active onClick={onClick} />);
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume title value as the same as label if title are not passed', () => {
  let tree = renderer.render(<ButtonToggle label="my label" onClick={onClick} />);
  expect(tree).toMatchSnapshot();
});
