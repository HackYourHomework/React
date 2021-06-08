import { useState } from 'react';
import Button from './Button';
import Joke from './Joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorVariable, setError] = useState(false);

  const getJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke',
      );
      const data = await response.json();
      setJoke(data);
      setLoading(false);
    } catch (error) {
      setError(`This error ${error} happened.`);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={getJoke}></Button>
      {!errorVariable && joke && <Joke joke={joke} />}
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
    </div>
  );
};

export default RandomJoke;
