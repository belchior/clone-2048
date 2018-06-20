import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
import { loadState, saveState } from './localState';

const saveStateMiddleware = ({ getState }) => {
  return next => action => {
    const returnValue = next(action);
    saveState(getState());
    return returnValue;
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  loadState(),
  composeEnhancers(applyMiddleware(saveStateMiddleware))
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
