import { store, } from './store';

it('store should match propertys', () => {
  expect(store).toMatchSnapshot({
    dispatch: expect.any(Function),
    getState: expect.any(Function),
    replaceReducer: expect.any(Function),
    subscribe: expect.any(Function),
  });
});
