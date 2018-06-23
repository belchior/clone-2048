import { initialState, reducer } from './index';

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
    expect(initialState).toHaveProperty('rollBack');
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
    expect(typeof initialState.rollBack).toBe('number');
    expect(typeof initialState.score).toBe('number');
    expect(typeof initialState.status).toBe('string');
    expect(Array.isArray(initialState.wall)).toBe(true);
  });
});
