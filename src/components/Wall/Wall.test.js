import React from 'react';
import { Wall } from './Wall';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

it('should render Wall without crashing', () => {
  const props = { wall: [], status: 'PLAYING' };
  const tree = renderer.render(<Wall {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Wall with 2 Blocks', () => {
  const props = { wall: [2,4], status: 'PLAYING' };
  const tree = renderer.render(<Wall {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className hardMode', () => {
  const props = { wall: [2,4], status: 'PLAYING', hardMode: true };
  const tree = renderer.render(<Wall {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className moveError', () => {
  const props = { wall: [2,4], status: 'PLAYING', moveError: true };
  const tree = renderer.render(<Wall {...props} />);

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className hardMode moveError separeted by space', () => {
  const props = { wall: [2,4], status: 'PLAYING', hardMode: true, moveError: true };
  const tree = renderer.render(<Wall {...props} />);

  expect(tree).toMatchSnapshot();
});
