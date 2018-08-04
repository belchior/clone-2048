import { mapStateToProps, mapDispatchToProps } from './index';

describe('mapStateToProps', () => {
  it('should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('should return an Object', () => {
    const state = {rollback: 2, hardMode: false, status: false};
    const props = mapStateToProps(state);
    expect(typeof props === 'object').toBe(true);
    expect(props).toHaveProperty('rollback', 2);
    expect(props).toHaveProperty('hardMode', false);
    expect(props).toHaveProperty('status', false);
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
    expect(typeof props).toBe('object');
    expect(props).toHaveProperty('rollbackAction');
    expect(props).toHaveProperty('restartAction');
    expect(props).toHaveProperty('hardModeAction');
  });

  it('property rollbackAction should be callable', () => {
    const rollbackAction = mapDispatchToProps(dispatch).rollbackAction;
    expect(typeof rollbackAction === 'function').toBe(true);

    rollbackAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'ROLLBACK'});
  });

  it('property restartAction should be callable', () => {
    const restartAction = mapDispatchToProps(dispatch).restartAction;
    expect(typeof restartAction === 'function').toBe(true);

    restartAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'RESTART'});
  });

  it('property hardModeAction should be callable', () => {
    const hardModeAction = mapDispatchToProps(dispatch).hardModeAction;
    expect(typeof hardModeAction === 'function').toBe(true);

    hardModeAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'TOGGLE_HARDMODE'});
  });

});
