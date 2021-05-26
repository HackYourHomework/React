import React from "react";

const Button = ({ getFriend }) => {
  return (
    <div>
      <button className="btn" type="submit" onClick={getFriend}>
        Get a friend!
      </button>
    </div>
  );
};

export default Button;
