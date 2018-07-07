import { loadState, saveState } from './localState';
import { initialState } from './reducers';

it('loadState function should be exported by localState file', () => {
  expect(typeof loadState).toBe('function');
});

it('loadState function should return undefined when there is no state storage', () => {
  /* global global */
  global.localStorage = {
    getItem: jest.fn(() => null),
  };

  const state = loadState();

  expect(state).toBeUndefined();
});

it('loadState should load state from localStorage API', () => {
  /* global global */
  global.localStorage = {
    getItem: jest.fn(() => JSON.stringify(initialState)),
  };

  const state = loadState();
  expect(state).toEqual(initialState);
  expect(localStorage.getItem.mock.calls).toHaveLength(1);
});


it('saveState function should be exported by localState file', () => {
  expect(typeof saveState).toBe('function');
});

it('saveState should save the state at localStorage', () => {
  /* global global */
  global.localStorage = {
    setItem: jest.fn(),
  };

  saveState();
  expect(localStorage.setItem.mock.calls).toHaveLength(1);
});
