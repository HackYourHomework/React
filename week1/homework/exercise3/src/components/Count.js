import React from 'react';
import Button from './Button';

const Count = ({ count, setCount }) => {
  return (
    <div>
      <p>{count}</p>
      <Button count={count} setCount={setCount} />
    </div>
  );
};

export default Count;
