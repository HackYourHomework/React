import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Add 1!
    </button>
  );
};
export default Button;
