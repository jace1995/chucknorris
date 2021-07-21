export enum StoreTypes {
  /* app */
  INIT_STORE = 'INIT_STORE',

  /* jokes */
  ADD_JOKE = 'ADD_JOKE',
  SET_JOKES = 'SET_JOKES',
  ASYNC_FETCH_JOKE_REQUEST = 'ASYNC_FETCH_JOKE_REQUEST',
}

export type ReducerAction<T extends keyof typeof StoreTypes, P = void> = (
  P extends void ?
  {
    type: T;
  } :
  {
    type: T;
    payload: P;
  }
)

export type InitStore = ReducerAction<StoreTypes.INIT_STORE>;
export type AddJoke = ReducerAction<StoreTypes.ADD_JOKE, Joke>;
export type SetJokes = ReducerAction<StoreTypes.SET_JOKES, Joke[]>;
export type AsyncFetchJokeRequest = ReducerAction<StoreTypes.ASYNC_FETCH_JOKE_REQUEST>;

/* jokes */

export interface Joke {
  id: string;
  text: string;
}

export interface JokesState {
  jokesList: Joke[];
}

export type JokesAction = AddJoke | SetJokes | AsyncFetchJokeRequest;
