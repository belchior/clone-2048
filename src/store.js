import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './localState';
import { reducer } from './reducers';


const saveStateMiddleware = ({ getState }) => next => (action) => {
  saveState(getState());
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  loadState(),
  composeEnhancers(applyMiddleware(saveStateMiddleware))
);
