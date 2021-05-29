import React from 'react';

function Button({ GetFriend }) {
  return (
    <button
      onClick={() => {
        GetFriend();
      }}
    >
      Get a friend!
    </button>
  );
}

export default Button;
