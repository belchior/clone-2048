/* eslint no-undefined: off */

/**
 * loadState :: (Object state) => undefined -> state
 */
export const loadState = () => {
  const serializedState = localStorage.getItem('state');
  return serializedState
    ? JSON.parse(serializedState)
    : undefined;
};


/**
 * saveState :: (Object state) => state -> undefined
 */
export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};
