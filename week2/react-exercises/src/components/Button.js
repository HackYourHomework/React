import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className="btn" type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
