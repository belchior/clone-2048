import { createStore } from 'redux';
import { reducers } from './reducers';
import { loadState } from './localStorage';

export const store = createStore(
  reducers,
  loadState()
);
