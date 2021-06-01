import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import Button from "../Button";

const RandomJoke = () => {
  const [notification, setNotification] = useState(``);
  const [joke, setJoke] = useState();

  const getJoke = async () => {
    try {
      setNotification(`Loading...`);
      const resp = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      } else {
        setNotification(``);
        setJoke(data);
      }
    } catch (err) {
      setNotification(err.message);
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
      {notification && <h1>{notification}</h1>}
      {joke && <Joke props={joke} />}
    </div>
  );
};

export default RandomJoke;
