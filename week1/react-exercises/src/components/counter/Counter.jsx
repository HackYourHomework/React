import React, { useState } from 'react';
import './Counter.css';

const Count = ({ count }) => <h1>{count}</h1>;
const Button = ({ action }) => (
  <button className="incBtn" onClick={action}>
    Add 1!
  </button>
);

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const feedback = count > 10 ? `It's higher than 10!` : `Keep counting...`;

  return (
    <div>
      <Count count={count} />

      <Button action={increase} />

      <h1>{feedback}</h1>
    </div>
  );
};

export default Counter;
