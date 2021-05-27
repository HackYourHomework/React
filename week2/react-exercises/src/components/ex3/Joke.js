import React from "react";

const Joke = ({ props }) => {
  return (
    <div className="profile">
      <p>{props.setup}</p>
      <p>{props.punchline}</p>
    </div>
  );
};

export default Joke;
