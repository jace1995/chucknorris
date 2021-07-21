import {
  StoreTypes,
  JokesState,
  JokesAction,
  Joke,
  AddJoke,
  SetJokes,
} from '../types';

const initialState: JokesState = {
  jokesList: []
};

export default (state = initialState, action: JokesAction): JokesState => {
  switch (action.type) {
    case StoreTypes.ADD_JOKE:
      return {
        ...state,
        jokesList: [...state.jokesList, action.payload],
      };

    case StoreTypes.SET_JOKES:
      return {
        ...state,
        jokesList: action.payload,
      };
  
    default:
      return state;
  }
};

export const addJoke = (joke: Joke): AddJoke => ({
  type: StoreTypes.ADD_JOKE,
  payload: joke,
});

export const setJokes = (jokes: Joke[]): SetJokes => ({
  type: StoreTypes.SET_JOKES,
  payload: jokes,
});
