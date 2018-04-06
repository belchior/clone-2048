import React from 'react';
import { Wall } from './Wall';
import renderer from 'react-test-renderer';

it('should render Wall without crashing', () => {
  let tree = renderer.create(<Wall />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Wall without crashing with parameters', () => {
  let tree = renderer.create(<Wall hardMode={true}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
