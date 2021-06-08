import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return <RandomJoke />;
}
function RandomJoke() {
  const [joke, setJoke] = useState();
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchJoke() {
      try {
        const response = await fetch(
          'https://official-joke-api.appspot.com/random_joke',
        );
        if (!response.ok) {
          throw Error(`An error has occurred: ${response.status}`);
        }
        if (response) {
          setLoading(false);
        }

        const data = await response.json();
        setJoke(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchJoke();
  }, [buttonClickCount]);

  return (
    <>
      <button
        onClick={() => {
          setButtonClickCount(buttonClickCount + 1);
        }}
      >
        press me
      </button>
      <Joke error={error} loading={loading} joke={joke} />
    </>
  );
}
function Joke({ error, loading, joke }) {
  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <>
          {loading && <p>Loading...</p>}
          {!loading && joke && (
            <>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
