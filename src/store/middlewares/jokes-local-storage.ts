import { Middleware } from 'redux';
import { loadLocalStorageJokes, saveLocalStorageJokes } from '../api';
import { RootState } from '../reducers';
import { setJokes } from '../reducers/jokes-reducer';
import { AddJoke, InitStore, StoreTypes } from '../types';

export const saveJokesMiddleware: Middleware<{}, RootState> = ({ getState, dispatch }) => next => (
  action: InitStore | AddJoke
) => {
  if (action.type === StoreTypes.INIT_STORE) {
    dispatch(setJokes(loadLocalStorageJokes()));
    return next(action);
  }

  if (action.type === StoreTypes.ADD_JOKE) {
    const v = next(action);
    saveLocalStorageJokes(getState().jokes.jokesList);
    return v;
  }

  return next(action);
}
