import { call, put, takeEvery } from "redux-saga/effects";
import { addJoke } from "../reducers/jokes-reducer";
import { fetchRandomJoke } from "../api";
import { AsyncFetchJokeRequest, StoreTypes } from "../types";

function* fetchJokeRequestWorker() {
  const joke = yield call(fetchRandomJoke);
  yield put(addJoke(joke));
}

export const fetchJokeRequest = (): AsyncFetchJokeRequest => ({
  type: StoreTypes.ASYNC_FETCH_JOKE_REQUEST,
});

export function* jokesWatcher() {
  yield takeEvery(StoreTypes.ASYNC_FETCH_JOKE_REQUEST, fetchJokeRequestWorker);
}
