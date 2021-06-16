import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button className="btn" type="submit" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
