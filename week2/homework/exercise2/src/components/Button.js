import React from 'react';

function Button({ getDogPhoto }) {
  return (
    <>
      <button onClick={getDogPhoto}>Press me</button>
    </>
  );
}

export default Button;
