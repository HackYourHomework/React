import React, { useEffect, useState } from "react";
import Joke from "./Joke";

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke(data);
      } catch {
        setIsError(true);
      } finally {
        setIsError(false);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR</p>}
      <Joke joke={joke} />
    </div>
  );
}

export default RandomJoke;
