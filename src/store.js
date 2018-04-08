import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';
import { http } from './services/Http';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    http,
  },
});

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
