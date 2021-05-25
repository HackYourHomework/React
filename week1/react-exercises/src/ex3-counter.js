import React, { useState } from 'react';

function Count({ state }) {
  return <h2>Count: {state}</h2>;
}
function Button({ setCount }) {
  return (
    <button onClick={() => setCount((state) => state + 1)}>
      <h1>Add 1!</h1>
    </button>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div style={{ clear: 'both', paddingTop: '30px' }}>
      <h2>
        <i>Exercise 3</i>
      </h2>
      <Count state={count} />
      <Button setCount={setCount} />
      <p>{feedback}</p>
    </div>
  );
}
export default Counter;
