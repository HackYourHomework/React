import React, { useState, useEffect } from "react";
import Joke from "./Joke";

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setJoke({});
    (async () => {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setTimeout(() => {
        setLoading(false);
        setJoke(() => data);
      }, 1000);
    })();
  }, []);

  return (
    <div className="RandomJoke">
      {isLoading && <p>Loading a joke...</p>}
      <Joke joke={joke} />
    </div>
  );
}

export default RandomJoke;
