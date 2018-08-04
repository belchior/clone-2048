import React from 'react';
import { Score } from './index';
import ShallowRenderer from 'react-test-renderer/shallow';

const render = new ShallowRenderer();

it('Score should render without crashing', () => {
  const tree = render.render(<Score current={1000} best={1234}/>);
  expect(tree).toMatchSnapshot();
});

it('Score should assume 0 as default value to current and best', () => {
  const tree = render.render(<Score />);
  expect(tree).toMatchSnapshot();
});
