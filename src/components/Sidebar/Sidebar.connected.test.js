import { mapStateToProps, mapDispatchToProps } from './index';

describe('mapStateToProps', () => {
  it('should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('should return an Object', () => {
    const state = {score: 0, bestScore: 0};
    const props = mapStateToProps(state);
    expect(typeof props === 'object').toBe(true);
  });

  it('should return an object that contains the score key', () => {
    const state = {score: 0, bestScore: 0};
    const props = mapStateToProps(state);
    expect(typeof props.score === 'number').toBe(true);
  });

  it('should return an object that contains the bestScore key', () => {
    const state = {score: 0, bestScore: 0};
    const props = mapStateToProps(state);
    expect(typeof props.bestScore === 'number').toBe(true);
  });
});

describe('mapDispatchToProps', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should be a function', () => {
    expect(typeof mapDispatchToProps === 'function').toBe(true);
  });

  it('should return an object', () => {
    const props = mapDispatchToProps(dispatch);
    expect(typeof props === 'object').toBe(true);
  });

});
