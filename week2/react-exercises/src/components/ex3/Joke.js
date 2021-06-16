import React from "react";

const Joke = ({ props }) => {
  const { setup, punchline } = props;
  return (
    <div className="profile">
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
};

export default Joke;
