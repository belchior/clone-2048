import { loadState, saveState } from './localState';
import { initialState } from './reducers';


describe('localState', () => {
  it('loadState function should be exported by localState file', () => {
    expect(typeof loadState).toBe('function');
  });

  it('loadState function should return undefined when there is no state storage', () => {
    // eslint-disable-next-line no-null/no-null
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(null);
    const state = loadState();

    expect(state).toBeUndefined();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('loadState should load state from localStorage API', () => {
    localStorage.getItem.mockReset();
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify(initialState));
    const state = loadState();
    expect(state).toStrictEqual(initialState);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('saveState function should be exported by localState file', () => {
    expect(typeof saveState).toBe('function');
  });

  it('saveState should save the state at localStorage', () => {
    const state = { bestScore: 0, hardMode: false };
    saveState(state);
    expect(localStorage.setItem).toHaveBeenCalledWith('state', '{"bestScore":0,"hardMode":false}');
  });
});
