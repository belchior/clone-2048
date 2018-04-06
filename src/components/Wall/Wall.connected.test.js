import { mapStateToProps, mapDispatchToProps } from './index';

describe('mapStateToProps', () => {
  it('should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('should return un Object', () => {
    const state = { hardMode: false };
    const props = mapStateToProps(state);
    expect(typeof props === 'object').toBe(true);
  });

  it('should return an object that contains the hardMode key', () => {
    const state = { hardMode: false };
    const props = mapStateToProps(state);
    expect(typeof props.hardMode === 'boolean').toBe(true);
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
