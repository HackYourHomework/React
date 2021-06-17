import { useState, useEffect } from 'react';
import Joke from './Joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      if (!resp.ok) throw Error;
      const { setup, punchline } = await resp.json();
      setJoke({
        setup,
        punchline,
      });
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="container">
      {isError && <p>Oops something went wrong!</p>}
      {isLoading && <p>Loading...</p>}
      {!isError && !isLoading && (
        <Joke setup={joke.setup} punchline={joke.punchline} />
      )}
    </div>
  );
};

export default RandomJoke;
