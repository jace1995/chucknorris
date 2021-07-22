import { useSelector } from "react-redux";
import { RootState } from "./reducers";

export const useReduxStore = <T>(selector: (store: RootState) => T): T =>
  useSelector(selector);
