import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}> Get a friend!</button>
    </div>
  );
};
export default Button;
