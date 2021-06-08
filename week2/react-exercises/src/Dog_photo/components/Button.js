import React from "react";

function Button({ getDogPhoto }) {
  return <button onClick={() => getDogPhoto()}>Get a dog!</button>;
}

export default Button;
