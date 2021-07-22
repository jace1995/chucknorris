import React from "react";
import { useDispatch } from "react-redux";
import { useReduxStore } from "../store/hook";
import { initStore } from "../store/reducers";
import { fetchJokeRequest } from "../store/watchers/jokes-watcher";
import { Container, JokeItem, MoreButton } from "./style";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const jokes = useReduxStore((store) => store.jokes.jokesList);

  React.useEffect(() => {
    dispatch(initStore());
  }, [dispatch]);

  return (
    <Container>
      <MoreButton onClick={() => dispatch(fetchJokeRequest())}>
        MORE!!!
      </MoreButton>
      {jokes.map((joke) => (
        <JokeItem key={joke.id}>{joke.text}</JokeItem>
      ))}
    </Container>
  );
};

export default App;
