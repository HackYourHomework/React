import React, { useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState();
  useEffect(() => {
    (async () => {
      const resp = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await resp.json();
      setJoke(data);
    })();
  }, []);
  return <div>{joke && <Joke props={joke} />}</div>;
};

export default RandomJoke;
