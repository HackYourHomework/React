import React from "react";

function Button({ getFriend }) {
  return <button onClick={() => getFriend()}>Get a friend!</button>;
}

export default Button;
