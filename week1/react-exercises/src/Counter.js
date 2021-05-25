import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  function AddOne() {
    setCount((count) => count + 1);
  }
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
      <Button onClick={AddOne} />
      <Count count={count} />
      <p>{feedback}</p>
    </div>
  );
};
export default Counter;
