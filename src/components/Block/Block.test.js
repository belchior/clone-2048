import React from 'react';
import { Block } from './Block';
import renderer from 'react-test-renderer';

it('should render Block without crashing', () => {
  let tree = renderer.create(<Block value={0} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Block with the value 64', () => {
  let tree = renderer.create(<Block value={65} />).toJSON();

  expect(tree).toMatchSnapshot();
});
