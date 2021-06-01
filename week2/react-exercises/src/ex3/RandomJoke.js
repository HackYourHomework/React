import React, { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    return fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
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
