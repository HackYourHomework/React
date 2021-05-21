import { useState } from "react";
import Count from "./ex3-Count";
import Button from "./ex3-Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Count count={count} />
      {count > 10 ? (
        <h3 style={{ color: "red" }}>{`It's higher than 10!`}</h3>
      ) : (
        <h3>{`Keep counting...`}</h3>
      )}
      <Button onClick={onClick} />
    </>
  );
};

export default Counter;
