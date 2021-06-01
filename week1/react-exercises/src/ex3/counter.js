import React from "react";
import Count from "./count";
import Button from "./Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  const feedBack = count > 10 ? "It is higher than 10" : " Keep counting...";
  return (
    <div>
      <Button onclick={increment} />
      <Count count={count} />
      <p>{feedBack}</p>
    </div>
  );
};
export default Counter;
