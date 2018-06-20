/**
  loadState :: (Object state) => undefined -> state
*/
export const loadState = () => {
  const serializedState = localStorage.getItem('state');
  return JSON.parse(serializedState);
};


/**
  saveState :: (Object state) => state -> undefined
*/
export const saveState = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};
