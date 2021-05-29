import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import Button from "../Button";

const RandomJoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [joke, setJoke] = useState();
  const getJoke = async () => {
    try {
      const resp = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      }
      setLoading(false);
      setError(false);
      setJoke(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setJoke();
      console.log(err);
    }
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <Button text="Get a new joke!" onClick={() => getJoke()} />
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>loading ...</h1>
      ) : (
        joke && <Joke props={joke} />
      )}
    </div>
  );
};

export default RandomJoke;
