import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { saveJokesMiddleware } from './middlewares/jokes-local-storage';
import rootReducer from './reducers';
import { rootWatcher } from './watchers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      saveJokesMiddleware,
    )
  )
);

sagaMiddleware.run(rootWatcher);

export default store;
