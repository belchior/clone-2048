import { store, } from './store';

describe('store', () => {
  it('store should match propertys', () => {
    expect(store).toMatchInlineSnapshot(
      {
        dispatch: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
        subscribe: expect.any(Function),
      },
      `
      Object {
        "dispatch": Any<Function>,
        "getState": Any<Function>,
        "replaceReducer": Any<Function>,
        "subscribe": Any<Function>,
        Symbol(observable): [Function],
      }
    `
    );
  });
});
