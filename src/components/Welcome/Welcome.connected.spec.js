import { mapStateToProps, mapDispatchToProps } from './index';


describe('Welcome', () => {
  it('mapStateToProps should be a function', () => {
    expect(typeof mapStateToProps === 'function').toBe(true);
  });

  it('mapStateToProps should return an Object', () => {
    const state = { hardMode: false, welcomeWall: [] };
    const props = mapStateToProps(state);

    expect(typeof props === 'object').toBe(true);
    expect(props).toHaveProperty('hardMode', false);
    expect(props).toHaveProperty('wall', []);
  });


  it('mapDispatchToProps should be a function', () => {
    expect(typeof mapDispatchToProps === 'function').toBe(true);
  });

  it('mapDispatchToProps should return an Object', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(typeof props === 'object').toBe(true);
    expect(props).toHaveProperty('button');
    expect(props.button).toHaveProperty('text');
    expect(props.button).toHaveProperty('handleAction');

    props.button.handleAction();
    expect(dispatch.mock.calls).toHaveLength(1);
  });
});
