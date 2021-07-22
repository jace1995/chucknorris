import { combineReducers } from "redux";
import { InitStore, StoreTypes } from "../types";
import jokesReducer from "./jokes-reducer";

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const initStore = (): InitStore => ({
  type: StoreTypes.INIT_STORE,
});

export default rootReducer;
