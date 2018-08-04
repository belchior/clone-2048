import React from 'react';
import { Block } from './Block';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

it('should render Block without crashing', () => {
  let tree = renderer.render(<Block value={0} />);
  expect(tree).toMatchSnapshot();
});

it('should render Block with the value 64', () => {
  let tree = renderer.render(<Block value={65} />);
  expect(tree).toMatchSnapshot();
});
