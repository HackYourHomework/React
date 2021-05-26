import React from "react";

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button className="btn" type="submit" onClick={getDogPhoto}>
        Get a dog!
      </button>
    </div>
  );
};

export default Button;
