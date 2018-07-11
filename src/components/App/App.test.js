import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './index';

it('renders Welcome without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = {
    maxBlock: 0,
    rollback: 0,
    status: '',
    wall: [],
    welcome: true,
  };
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <App state={state} dispatch={dispatch} />
  );

  expect(tree).toMatchSnapshot();
});

it('renders Wall without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = {
    maxBlock: 0,
    rollback: 0,
    status: '',
    wall: [],
    welcome: false,
  };
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <App state={state} dispatch={dispatch} />
  );

  expect(tree).toMatchSnapshot();
});
