import React from 'react';

const Joke = ({ joke }) => {
  return (
    <div style={{ margin: '20px' }}>
      <ul>
        <li>{joke.setup}</li>
        <li>{joke.punchline}</li>
      </ul>
    </div>
  );
};

export default Joke;
