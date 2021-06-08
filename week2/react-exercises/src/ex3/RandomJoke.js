import React, { useEffect, useState } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://official-joke-api.appspot.com/random_joke";

  useEffect(() => {
    const getJoke = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setJoke(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        setError(null);
      }
    };
    getJoke();
  }, []);

  return (
    <div className="Joke">
      <h1> 👋 Find your joke here 👋 </h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error is {isError.message}</p>}
      {!isError && !isLoading && Object.keys(joke).length > 0 && (
        <Joke joke={joke} />
      )}
    </div>
  );
};

export default RandomJoke;
