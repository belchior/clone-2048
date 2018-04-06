import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';
import { loadState } from './localStorage';

const store = createStore(
  reducers,
  loadState()
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
);
registerServiceWorker();
