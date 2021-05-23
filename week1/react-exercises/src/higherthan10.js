import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedBack = count > 10 ? "it's higher than 10 " : "keep counting";

  return (
    <div>
      <Count count={count} feedBack={feedBack} />
      <Button setCount={setCount} count={count} />
    </div>
  );
};

const Count = ({ count, feedBack }) => {
  return (
    <div>
      <p>{count}</p>
      <p>{feedBack}</p>
    </div>
  );
};

const Button = ({ setCount, count }) => {
  return <button onClick={() => setCount(count + 1)}>add 1</button>;
};
export default Counter;
