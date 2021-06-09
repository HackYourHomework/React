import React, { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    getJoke();
  }, []);
  const getJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
  };
  return <Joke joke={joke} />;
};

const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};
export default RandomJoke;
