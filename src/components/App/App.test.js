import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './index';
import { initialState } from '../../reducers/reducers';
import { restart as restartAction } from '../../reducers/actions/actions';
const renderer = new ShallowRenderer();

it('App should render Welcome without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'WELCOME', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);

  expect(tree).toMatchSnapshot();
});

it('App should render Wall without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'PLAYING', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);

  expect(tree).toMatchSnapshot();
});

it('App should render Wall without crashing when status attribute is not defined', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: undefined, };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);

  expect(tree).toMatchSnapshot();
});

it('App should render renderModalLose without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'PLAYER_LOSE', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);
  expect(tree).toMatchSnapshot();
});

it('Action button on renderModalLose should return an restart action', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'PLAYER_LOSE', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);
  const buttonAction = tree.props.children[1].props.children.props.button.action;

  expect(buttonAction()).toEqual(restartAction());
  expect(dispatch.mock.calls).toHaveLength(1);
});

it('App should render renderModalWon without crashing', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'PLAYER_WON', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);

  expect(tree).toMatchSnapshot();
});

it('Action button on renderModalWon should return an restart action', () => {
  const dispatch = jest.fn(action => action);
  const state = { ...initialState, status: 'PLAYER_WON', };
  const tree = renderer.render(<App dispatch={dispatch} state={state} />);
  const buttonAction = tree.props.children[1].props.children.props.button.action;

  expect(buttonAction()).toEqual(restartAction());
  expect(dispatch.mock.calls).toHaveLength(1);
});
