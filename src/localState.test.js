import { loadState, saveState } from './localState';
import { initialState } from './reducers';

const localStorageMock = {
  getItem: jest.fn(() => JSON.stringify(initialState)),
  setItem: jest.fn(),
  clear: jest.fn()
};
/* global global */
global.localStorage = localStorageMock;


it('localState should export loadState and should be a function', () => {
  expect(typeof loadState).toBe('function');
});

it('localState should export saveState and should be a function', () => {
  expect(typeof saveState).toBe('function');
});

it('loadState should load mock state from localStorage', () => {
  const state = loadState();
  expect(state).toEqual(initialState);
  expect(localStorage.getItem.mock.calls).toHaveLength(1);
});

it('saveState should save the state at localStorage', () => {
  saveState();
  expect(localStorage.setItem.mock.calls).toHaveLength(1);
});
