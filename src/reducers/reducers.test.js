import { initialState, reducer } from './index';
import * as actions from '../actions/actions';
import * as actionTypes from '../actions/types';

const localStorageMock = {
  getItem: jest.fn(() => JSON.stringify(initialState)),
  setItem: jest.fn(),
  clear: jest.fn()
};
/* global global */
global.localStorage = localStorageMock;


describe('reducers file', () => {
  it('should export an object named initialState', () => {
    expect(typeof initialState).toBe('object');
  });
  it('should export a function named reducer', () => {
    expect(typeof reducer).toBe('function');
  });
});

describe('initialState', () => {
  it('should have all properties', () => {
    expect(initialState).toHaveProperty('bestScore');
    expect(initialState).toHaveProperty('hardMode');
    expect(initialState).toHaveProperty('history');
    expect(initialState).toHaveProperty('initialWall');
    expect(initialState).toHaveProperty('maxBlock');
    expect(initialState).toHaveProperty('moveError');
    expect(initialState).toHaveProperty('rollback');
    expect(initialState).toHaveProperty('score');
    expect(initialState).toHaveProperty('status');
    expect(initialState).toHaveProperty('wall');
  });

  it('properties should matches the types', () => {
    expect(typeof initialState.bestScore).toBe('number');
    expect(typeof initialState.hardMode).toBe('boolean');
    expect(Array.isArray(initialState.history)).toBe(true);
    expect(Array.isArray(initialState.initialWall)).toBe(true);
    expect(typeof initialState.maxBlock).toBe('number');
    expect(typeof initialState.moveError).toBe('boolean');
    expect(typeof initialState.rollback).toBe('number');
    expect(typeof initialState.score).toBe('number');
    expect(typeof initialState.status).toBe('string');
    expect(Array.isArray(initialState.wall)).toBe(true);
  });
});

// it('called with LOAD action should merge the sent state with loaded state', () => {
it('The load reducer should merge the sent state with loaded state', () => {
  localStorage.setItem.mockReset();
  const state = { ...initialState, maxBlock: 1024, };
  const newState = reducer(state, actions.load());

  expect(localStorage.getItem.mock.calls).toHaveLength(1);
  expect(newState).toEqual(state);
});

it('The moviment reducer should update the bestScore and add the current wall at the end of history', () => {
  const state = { ...initialState, score: 256, bestScore: 0, history: [], };
  const newState = reducer(state, actions.moviment(state));

  expect(newState.bestScore).toBe(state.score);
  expect(newState.history[1]).toEqual(state.wall);
});

it('The moviment reducer should not update the bestScore when score is less than bestScore', () => {
  const state = { ...initialState, score: 256, bestScore: 512 };
  const newState = reducer(state, actions.moviment(state));

  expect(newState.bestScore).toBeGreaterThan(newState.score);
});

it('The moveError reducer should update the moveError attribute with the sent value', () => {
  const newStateWithMoveErrorTrue = reducer(initialState, actions.moveError(true));
  const newStateWithMoveErrorFalse = reducer(initialState, actions.moveError(false));

  expect(newStateWithMoveErrorTrue).toHaveProperty('moveError', true);
  expect(newStateWithMoveErrorFalse).toHaveProperty('moveError', false);
});

it('The playerLose reducer should indicate that player lose with status equal to PLAYER_LOSE', () => {
  const newState = reducer(initialState, actions.playerLose());

  expect(newState).toHaveProperty('status', actionTypes.PLAYER_LOSE);
});

it('The playerWon reducer should indicate that player won with status equal to PLAYER_WON', () => {
  const newState = reducer(initialState, actions.playerWon());

  expect(newState).toHaveProperty('status', actionTypes.PLAYER_WON);
});

it('The restart reducer should set the state to be equal to the initialState with exception of the bestScore, this must be the same', () => {
  const state = { ...initialState, score: 2064, bestScore: 2064, };
  const stateReseted = { ...initialState, bestScore: 2064, };
  const newState = reducer(state, actions.restart());

  expect(newState).toEqual(stateReseted);
});

it('The rollback reducer should decrement the rollback attribute 1 by 1, the minimum value should be 0 ', () => {
  let state = {
    ...initialState,
    rollback: 2,
    history: [
      [ 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
      [ 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    ]
  };

  state = reducer(state, actions.rollback());
  expect(state).toHaveProperty('rollback', 1);
  expect(state.history).toHaveLength(1);

  state = reducer(state, actions.rollback());
  expect(state).toHaveProperty('rollback', 0);
  expect(state.history).toHaveLength(0);

  state = reducer(state, actions.rollback());
  expect(state).toHaveProperty('rollback', 0);
  expect(state.history).toHaveLength(0);
});

it('The save reducer should save the state at localStorage', () => {
  localStorage.setItem.mockReset();

  const state = { ...initialState };
  reducer(state, actions.save());
  expect(localStorage.setItem.mock.calls).toHaveLength(1);
});

it('The reducer toggleHardMode should alternate the hardMode attribute between true and false', () => {
  let state = { ...initialState, hardMode: false };
  let newState = reducer(state, actions.toggleHardmode());
  expect(newState.hardMode).not.toBe(state.hardMode);

  state = { ...initialState, hardMode: true };
  newState = reducer(state, actions.toggleHardmode());
  expect(newState.hardMode).not.toBe(state.hardMode);
});

it('The reducer should return the same state when the action passed to match with the registered actions', () => {
  const state = { ...initialState, moveError: true, maxBlock: 1024 };
  const newState = reducer(state, {type: 'WRONG'});

  expect(newState).toEqual(state);
});

it('The reducer should set the state to initialState when state is not passed as a first parameter', () => {
  const newState = reducer(undefined, actions.rollback);

  expect(newState).toEqual(initialState);
});

// it('', () => {
//
// });