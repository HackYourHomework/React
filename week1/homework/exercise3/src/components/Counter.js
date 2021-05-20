import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
      {count > 10 && <p>It's higher than 10!</p>}
      {count > 0 && count < 11 && <p>Keep counting...</p>}
    </div>
  );
};

export default Counter;
