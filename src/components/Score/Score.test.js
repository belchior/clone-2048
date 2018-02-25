import React from 'react';
import { Score } from './Score';
import renderer from 'react-test-renderer';

it('Score should render without crashing', () => {
  let tree = renderer.create(<Score current={1000} best={1234}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Score should assume 0 as default value to current and best', () => {
  let tree = renderer.create(<Score/>).toJSON();
  expect(tree).toMatchSnapshot();
});
