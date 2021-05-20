import React from 'react';

const Button = ({ count, setCount }) => {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
    </div>
  );
};

export default Button;
