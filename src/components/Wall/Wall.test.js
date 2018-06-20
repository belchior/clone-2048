import React from 'react';
import { Wall } from './Wall';
import renderer from 'react-test-renderer';

it('should render Wall without crashing', () => {
  let tree = renderer.create(<Wall wall={[]} status="PLAYING" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className hardMode', () => {
  let tree = renderer.create(<Wall wall={[]} status="PLAYING" hardMode={true}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className moveError', () => {
  let tree = renderer.create(<Wall wall={[]} status="PLAYING" moveError={true}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Wall adding the className hardMode moveError separeted by space', () => {
  let tree = renderer.create(<Wall wall={[]} status="PLAYING" hardMode={true} moveError={true}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
