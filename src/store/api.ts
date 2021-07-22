import { v4 as uuidv4 } from "uuid";
import { Joke } from "./types";

/* fetch jokes */

export const fetchRandomJoke = async (): Promise<Joke> => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();
  return {
    id: uuidv4(),
    text: json.value,
  };
};

/* sync jokes with localstorage */

const LOCAL_STORAGE_JOKES = "jokes";

export const saveLocalStorageJokes = (jokes: Joke[]): void => {
  localStorage.setItem(LOCAL_STORAGE_JOKES, JSON.stringify(jokes));
};

export const loadLocalStorageJokes = (): Joke[] => {
  try {
    return (
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_JOKES) as string) ?? []
    );
  } catch {
    return [];
  }
};
