import { all } from 'redux-saga/effects';
import { jokesWatcher } from './jokes-watcher';

export function* rootWatcher() {
  yield all([
    jokesWatcher(),
  ]);
};
