import { mapStateToProps, mapDispatchToProps } from './index';

describe('mapStateToProps', () => {
  it('should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('should return un Object', () => {
    const state = {rollBack: 2, hardMode: false};
    const props = mapStateToProps(state);
    expect(typeof props === 'object').toBe(true);
  });

  it('should return an object that contains the rollBack key', () => {
    const state = {rollBack: 2, hardMode: false};
    const props = mapStateToProps(state);
    expect(typeof props.rollBack === 'number').toBe(true);
  });

  it('should return an object that contains the hardMode key', () => {
    const state = {rollBack: 2, hardMode: false};
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

  it('should return an object that contains the rollBackAction key', () => {
    const props = mapDispatchToProps(dispatch);
    expect(props).toHaveProperty('rollBackAction');
  });

  it('should return an object that contains the saveAction key', () => {
    const props = mapDispatchToProps(dispatch);
    expect(props).toHaveProperty('saveAction');
  });

  it('should return an object that contains the loadAction key', () => {
    const props = mapDispatchToProps(dispatch);
    expect(props).toHaveProperty('loadAction');
  });

  it('should return an object that contains the restartAction key', () => {
    const props = mapDispatchToProps(dispatch);
    expect(props).toHaveProperty('restartAction');
  });

  it('should return an object that contains the hardModeAction key', () => {
    const props = mapDispatchToProps(dispatch);
    expect(props).toHaveProperty('hardModeAction');
  });


  it('the property rollBackAction should be callable', () => {
    const rollBackAction = mapDispatchToProps(dispatch).rollBackAction;
    expect(typeof rollBackAction === 'function').toBe(true);

    rollBackAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'ROLLBACK'});
  });

  it('the property saveAction should be callable', () => {
    const saveAction = mapDispatchToProps(dispatch).saveAction;
    expect(typeof saveAction === 'function').toBe(true);

    saveAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'SAVE'});
  });

  it('the property loadAction should be callable', () => {
    const loadAction = mapDispatchToProps(dispatch).loadAction;
    expect(typeof loadAction === 'function').toBe(true);

    loadAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'LOAD'});
  });

  it('the property restartAction should be callable', () => {
    const restartAction = mapDispatchToProps(dispatch).restartAction;
    expect(typeof restartAction === 'function').toBe(true);

    restartAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'RESTART'});
  });

  it('the property hardModeAction should be callable', () => {
    const hardModeAction = mapDispatchToProps(dispatch).hardModeAction;
    expect(typeof hardModeAction === 'function').toBe(true);

    hardModeAction();
    expect(dispatch.mock.calls).toHaveLength(1);
    expect(dispatch.mock.calls[0][0]).toMatchObject({type: 'TOGGLE_HARDMODE'});
  });

});
