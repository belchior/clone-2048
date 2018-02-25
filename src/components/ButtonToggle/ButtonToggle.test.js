import React from 'react';
import { ButtonToggle } from './ButtonToggle';
import renderer from 'react-test-renderer';

const onClick = jest.fn();

it('ButtonToggle should render without crashing', () => {
  let tree = renderer.create(
    <ButtonToggle onClick={onClick} active={true} label="toggle button" title="my toggle button" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should call the callback when click', () => {
  let tree = renderer.create(<ButtonToggle onClick={onClick} />).toJSON();
  tree.children[0].props.onClick();
  expect(onClick.mock.calls).toHaveLength(1);
});

it('ButtonToggle should assume data-active as false if active prop not passed', () => {
  let tree = renderer.create(<ButtonToggle onClick={onClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume data-active as false if active prop is false', () => {
  let tree = renderer.create(<ButtonToggle onClick={onClick} active={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume data-active as true if active prop is true', () => {
  let tree = renderer.create(<ButtonToggle onClick={onClick} active={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ButtonToggle should assume title value as the same as label if title are not passed', () => {
  let tree = renderer.create(<ButtonToggle onClick={onClick} label="my label" />).toJSON();
  expect(tree).toMatchSnapshot();
});
