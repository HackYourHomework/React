import React, { useState, useEffect } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => setJoke(data));
  }, []);

  return (
    <div>
      <h2>Exercise 3: Random Joke Generator</h2>
      <Joke joke={joke} />
    </div>
  );
}

function Joke({ joke }) {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default RandomJoke;
